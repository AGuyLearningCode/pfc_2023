import React, { useEffect, useState } from 'react'
import MovieData from '../../components/MovieData';
import { useParams } from 'react-router-dom';
import { getURL } from '../../helpers/fetchHelpers';
/**
 * Pagina con el diseño de los detalles de una pelicula o serie.
 * 
 */
const Info = () => {

  /* Usamos UseParams para recibir el tipo de item que has solicitado y su identificador a través
  *  de la URL.
  */
  const { type, movieID } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    if (type === "p") {
      getURL(`movie/${movieID}`).then((data) => {
        setMovie(data);
      })
    }else if(type==="s"){
      getURL(`tv/${movieID}`).then((data) => {
        setMovie(data);
      })
    }


  }, [movieID])

  const [actors, setActors] = useState({});
  useEffect(() => {
    if (type==="p"){
      getURL(`movie/${movieID}/credits`).then((data) => {
        setActors(data);
      })
    }else if(type ==="s"){
      getURL(`tv/${movieID}/credits`).then((data) => {
        setActors(data);
      })
    }
    
  }, [movieID])

  return (
    <div>
      <div>
        <MovieData movie ={movie} actors={actors} type={type}/>
      </div>
    </div>
  )
}

export default Info
