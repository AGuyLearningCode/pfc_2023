import React from 'react'
import {useState} from 'react';
import styles from './Search.module.css'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';

const Search = () => {
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [busqueda, setBusqueda] = useState("")
  
  const cambioBusqueda = evt => {
    const elemento = evt.currentTarget;
    const nuevoValor = elemento.value;
    setBusqueda(nuevoValor);
  }

  const clickBoton = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=es&page=1`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU0M2FjODg2ZTNmMmFiNzk1YmRjOGExMzY1NGE2MCIsInN1YiI6IjY1MzZlNmM0NDA4M2IzMDEzNzEzNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqoDP60qX3AiwObHa7-e2Kz6KL3irRWTzDPgmyPB53U',
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
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
      <button onClick={clickBoton} className={styles.paco}>Buscar</button>
      <hr />
      <div className={styles.resultados}>
        {
          !peliculasEncontradas.length && <p>Pelicula no encontrada</p>

        }
        {!!peliculasEncontradas.length &&
          peliculasEncontradas.map(
            pelicula => <ItemResultadoBusqueda
              onClick={
                e => console.log() //detallesPelicula(pelicula)
              }
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