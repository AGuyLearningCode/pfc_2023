import React, { useEffect, useState } from 'react'
import MovieData from '../../components/MovieData';
import { useParams } from 'react-router-dom';
import { getURL } from '../../helpers/fetchHelpers';
import styles from './info.module.css';
/**
 * Pagina con el diseño de los detalles de una pelicula o serie.
 * 
 */
const Info = () => {

  /* Usamos UseParams para recibir el tipo de item que has solicitado y su identificador a través
  *  de la URL.
  */
  const { tipo, idPelicula } = useParams();

  const [pelicula, setPelicula] = useState({});
  useEffect(() => {
    if (tipo === "p") {
      getURL(`movie/${idPelicula}`).then((data) => {
        setPelicula(data);
      })
    }else if(tipo==="s"){
      getURL(`tv/${idPelicula}`).then((data) => {
        setPelicula(data);
      })
    }


  }, [idPelicula])

  const [actores, setActores] = useState({});
  useEffect(() => {
    if (tipo==="p"){
      getURL(`movie/${idPelicula}/credits`).then((data) => {
        setActores(data);
      })
    }else if(tipo ==="s"){
      getURL(`tv/${idPelicula}/credits`).then((data) => {
        setActores(data);
      })
    }
    
  }, [idPelicula])

  return (
    <div>
      <div className={styles.info}>
        <MovieData movie ={pelicula} actores={actores} type={tipo}/>
      </div>
    </div>
  )
}

export default Info
