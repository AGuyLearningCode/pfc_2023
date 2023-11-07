import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ItemResultadoBusqueda from './components/ItemResultadoBusqueda';
import DatosDePelicula from './components/DatosDePelicula';
import styles from "./App.module.css";

function App() {

  const [busqueda, setBusqueda] = useState("")
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [pelicula, setPelicula] = useState({});


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
        console.log(data);

        // map transformat cada delemento a otra cosa usando una funcion.

        //const ciudades = ["san diego", "tokio", "bombay"]
        //ciudades.map(cadena => cadena.toUpperCase())


        let peliculas = data.results.map(cadena => ({
          "original_title": cadena.title,
          "release_date": cadena.release_date,
          "id": cadena.id,
          "img": cadena.poster_path
        }));

        setPeliculasEncontradas(peliculas)
        /*
              const panelResultado = document.getElementById("resultado")
              panelResultado.innerHTML = ""
              for(let pelicula of peliculasEncontradas) {
                panelResultado.innerHTML += <h2>pelicula.original_title</h2>
              }
              */
        //peliculasEncontradas = peliculas;
        console.log(peliculas);
        // array -> objetos con 2 campos: original_title y el campo release_date



      })

  }

  const detallesPelicula = (data) => {
    console.log(data);
    fetch(`https://api.themoviedb.org/3/movie/${data.id}?language=es`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU0M2FjODg2ZTNmMmFiNzk1YmRjOGExMzY1NGE2MCIsInN1YiI6IjY1MzZlNmM0NDA4M2IzMDEzNzEzNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqoDP60qX3AiwObHa7-e2Kz6KL3irRWTzDPgmyPB53U',
        'accept': 'application/json'
      }
    }).then((response) => response.json()).then((data) => {
      setPelicula(data);
    })


    // console.log(data.results[data.].original_title);
  }

  // JSX
  return (
    <div className="App">
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
                e => detallesPelicula(pelicula)
              }
              key={pelicula.id}
              title={pelicula.original_title}
              img={pelicula.img}
            />
          )
        }
      </div>
      <div className="DetallesPelicula">
        <DatosDePelicula pelicula={pelicula} />
      </div>
    </div>
  );
}

export default App;
