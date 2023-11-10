import React, { useEffect } from 'react'
import { useState } from 'react';
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

  return (
    <div>
      <div className="DetallesPelicula">
        <DatosDePelicula pelicula={pelicula} />
      </div>
    </div>
  )
}

export default Info
