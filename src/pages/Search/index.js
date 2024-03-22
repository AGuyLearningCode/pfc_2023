import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getURL } from '../../helpers/fetchHelpers';
import ListadoPeliculas from '../../components/ListadoPeliculas';
import { mapPelicula, mapSerie } from '../../helpers/mapHelpers';
/**
 * Aquí se determina el diseño de la página de resultados.
 */
const Search = () => {
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [seriesEncontradas, setSeriesEncontradas] = useState([])
  const { tipo, consulta } = useParams();
  const [resultadoFinal, setResultadoFinal] = useState([]);

  /**
   * Al encontrar películas o series cambiamos la variable de estado y por ende cambia el estado en la página.
   */
  useEffect(() => {
    if (peliculasEncontradas.length) {
      setResultadoFinal(peliculasEncontradas);
    } else if (seriesEncontradas.length) {
      setResultadoFinal(seriesEncontradas)
    }
  }, [seriesEncontradas, peliculasEncontradas])

  /**
   * Aquí es donde hacemos la búsqueda cada vez que realizamos una consulta nueva.
   */
  useEffect(() => {
    const params = {
      query: consulta,
      include_adult: false,
      page: 1
    }

    if (tipo === "peliculas") {
      getURL(`search/movie`, params)
        .then(data => {
          let peliculas = data.results.map(mapPelicula);
          setPeliculasEncontradas(peliculas);
          setSeriesEncontradas([]);
        })
    } else if (tipo === "serie") {
      getURL(`search/tv`, params)
        .then(data => {
          let series = data.results.map(mapSerie);
          setSeriesEncontradas(series);
          setPeliculasEncontradas([]);
        })
    }

  }, [tipo, consulta]);

  return (


    <ListadoPeliculas peliculas={resultadoFinal} tipo={tipo} dateFormat="year" />

  )
}
export default Search