import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './search.module.css'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';
import { useParams } from "react-router-dom";
import { getURL } from '../../helpers/fetchHelpers';
import { Button } from 'react-bootstrap';
import ListadoPeliculas from '../../components/ListadoPeliculas';
import { mapPelicula, mapSerie } from '../../helpers/mapHelpers';


const Search = () => {
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [seriesEncontradas, setSeriesEncontradas] = useState([])
  const [busqueda, setBusqueda] = useState("")

  

  const { tipo, consulta } = useParams();
  const [resultadoFinal, setResultadoFinal] = useState([]);
  

  useEffect(() => {
    if (peliculasEncontradas.length) {
      setResultadoFinal(peliculasEncontradas);
    } else if (seriesEncontradas.length) {
      setResultadoFinal(seriesEncontradas)
    }
  }, [seriesEncontradas, peliculasEncontradas])

  useEffect(() => {
    const params = {
      query: consulta,
      include_adult: false,
      page: 1
    }

    if (tipo === "pelicula") {
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


    <ListadoPeliculas peliculas={resultadoFinal} tipo={tipo} />

  )
}
export default Search