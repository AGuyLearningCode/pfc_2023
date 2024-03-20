import React, { useEffect, useState } from 'react'
import DatosDePelicula from '../../components/DatosDePelicula';
import { useParams } from 'react-router-dom';
import { getURL } from '../../helpers/fetchHelpers';
import styles from './info.module.css';
/**
 * Pagina con el diseño de los detalles de una pelicula o serie.
 * 
 */
const Info = () => {

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

  // https://api.themoviedb.org/3/movie/{movie_id}/credits

  return (
    <div>
      <div className={styles.info}>
        <DatosDePelicula pelicula={pelicula} actores={actores} tipo={tipo}/>
      </div>
    </div>
  )
}

export default Info
