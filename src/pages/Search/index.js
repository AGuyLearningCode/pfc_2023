import React from 'react'
import {useState} from 'react';
import styles from './Search.module.css'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';
import { useNavigate } from "react-router-dom";
import { getURL } from '../../helpers/fetchHelpers';
import { Button } from 'react-bootstrap';

const Search = () => {
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate();
  const cambioBusqueda = evt => {
    const elemento = evt.currentTarget;
    const nuevoValor = elemento.value;
    setBusqueda(nuevoValor);
  }

  const clickBoton = () => {
    const params = {
      query: busqueda,
      include_adult: false,
      page:1
    }


    getURL(`search/movie`, params)
      .then(data => {
        let peliculas = data.results.map(cadena => ({
          "original_title": cadena.title,
          "release_date": cadena.release_date,
          "id": cadena.id,
          "img": cadena.poster_path
        }));
        setPeliculasEncontradas(peliculas);
      })
  }

  return (
    <>
       <input value={busqueda} onChange={cambioBusqueda} />
      <Button onClick={clickBoton} className={styles.paco}>Buscar</Button>
      <hr />
      <div className={styles.resultados}>
        {
          !peliculasEncontradas.length && <p>Pelicula no encontrada</p>
        }
        {!!peliculasEncontradas.length &&
          peliculasEncontradas.map(
            pelicula => <ItemResultadoBusqueda
              onClick={
                e => navigate(`/Info/${pelicula.id}`)               }
              key={pelicula.id}
              title={pelicula.original_title}
              img={pelicula.img}
            />
          )
        }
      </div>
    </>
  )
}
export default Search