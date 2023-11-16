import React, { useEffect, useState } from 'react'
import DatosDePelicula from '../../components/DatosDePelicula';
import { useParams } from 'react-router-dom';
import { getURL } from '../../helpers/fetchHelpers';

const Info = () => {

  const { idPelicula } = useParams();

  const [pelicula, setPelicula] = useState({});
  useEffect(() => {
    getURL(`movie/${idPelicula}`).then((data) => {
      setPelicula(data);
    })
  }, [idPelicula])

  const[actores,setActores]=useState({});
  useEffect(()=>{
    getURL(`movie/${idPelicula}/credits`).then((data) =>{
      setActores(data);
    })
  },[idPelicula])

// https://api.themoviedb.org/3/movie/{movie_id}/credits




  return (
    <div>
      <div className="DetallesPelicula">
        <DatosDePelicula pelicula={pelicula} actores={actores}/>
      </div>
    </div>
  )
}

export default Info
