import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getURL } from '../../helpers/fetchHelpers';
import MovieList from '../../components/MovieList';
import { mapMovie, mapSeries } from '../../helpers/mapHelpers';
/**
 * Aquí se determina el diseño de la página de resultados.
 */
const Search = () => {
  const [moviesFound, setMoviesFound] = useState([])
  const [seriesFound, setSeriesFound] = useState([])
  const { type, query } = useParams();
  const [finalResult, setFinalResult] = useState([]);

  /**
   * Al encontrar películas o series cambiamos la variable de estado y por ende cambia el estado en la página.
   */
  useEffect(() => {
    if (moviesFound.length) {
      setFinalResult(moviesFound);
    } else if (seriesFound.length) {
      setFinalResult(seriesFound)
    }
  }, [seriesFound, moviesFound])

  /**
   * Aquí es donde hacemos la búsqueda cada vez que realizamos una consulta nueva.
   */
  useEffect(() => {
    const params = {
      query: query,
      include_adult: false,
      page: 1
    }

    if (type === "peliculas") {
      getURL(`search/movie`, params)
        .then(data => {
          let movies = data.results.map(mapMovie);
          setMoviesFound(movies);
          setSeriesFound([]);
        })
    } else if (type === "serie") {
      getURL(`search/tv`, params)
        .then(data => {
          let series = data.results.map(mapSeries);
          setSeriesFound(series);
          setMoviesFound([]);
        })
    }

  }, [type, query]);

  return (


    <MovieList movies={finalResult} type={type} dateFormat="year" />

  )
}
export default Search