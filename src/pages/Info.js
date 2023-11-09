import React, { useEffect } from 'react'
import { useState } from 'react';
import DatosDePelicula from '../components/DatosDePelicula';
import { useParams } from 'react-router-dom';
const Info = () => {

  const { idPelicula } = useParams();

  const [pelicula, setPelicula] = useState({});
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?language=es`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU0M2FjODg2ZTNmMmFiNzk1YmRjOGExMzY1NGE2MCIsInN1YiI6IjY1MzZlNmM0NDA4M2IzMDEzNzEzNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqoDP60qX3AiwObHa7-e2Kz6KL3irRWTzDPgmyPB53U',
        'accept': 'application/json'
      }
    }).then((response) => response.json()).then((data) => {
      setPelicula(data);
    })
  }, [ idPelicula ])

  return (
    <div>
       <div className="DetallesPelicula">
        <DatosDePelicula pelicula={pelicula} />
      </div>
    </div>
  )
}

export default Info
