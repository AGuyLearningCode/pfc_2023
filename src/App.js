import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [peliculasEncontradas, setPeliculasEncontradas ] = useState([])
  const [overview, setOverview] = useState("");


  const cambioBusqueda = evt => { 
    const elemento = evt.currentTarget;
    const nuevoValor = elemento.value;
    setBusqueda(nuevoValor);
  }

  const clickBoton = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=en-US&page=1`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU0M2FjODg2ZTNmMmFiNzk1YmRjOGExMzY1NGE2MCIsInN1YiI6IjY1MzZlNmM0NDA4M2IzMDEzNzEzNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqoDP60qX3AiwObHa7-e2Kz6KL3irRWTzDPgmyPB53U',
        'accept': 'application/json'
      }
    })
    .then( response => response.json())
    .then( data => {
      console.log(data);
      console.log(data.results[6].original_title);
      console.log(data.results[6].release_date);

      // map transformat cada delemento a otra cosa usando una funcion.

      //const ciudades = ["san diego", "tokio", "bombay"]
      //ciudades.map(cadena => cadena.toUpperCase())


      let peliculas = data.results.map(cadena => ({ "original_title" : cadena.original_title,
                                                 "release_date": cadena.release_date,
                                                "id": cadena.id}));

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

  const detallesPelicula = (data) =>{
    console.log(data);
    fetch(`https://api.themoviedb.org/3/movie/${data.id}`, {headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU0M2FjODg2ZTNmMmFiNzk1YmRjOGExMzY1NGE2MCIsInN1YiI6IjY1MzZlNmM0NDA4M2IzMDEzNzEzNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqoDP60qX3AiwObHa7-e2Kz6KL3irRWTzDPgmyPB53U',
      'accept': 'application/json'
      }
    }).then( (response) => response.json() ).then((data) => {
      console.log(data);
      setOverview(data.overview)
    })

    
    // console.log(data.results[data.].original_title);
  }

   // JSX
  return (
    <div className="App">
      <input value={busqueda} onChange={cambioBusqueda} />
      <button onClick={clickBoton}>Buscar</button>
      <hr/>
      {
        peliculasEncontradas.map(pelicula => <button onClick={e => detallesPelicula(pelicula)}>{pelicula.original_title}</button>)
      }
      <div className="DetallesPelicula">
        { overview }
      </div>
    </div>
  );
}

export default App;
