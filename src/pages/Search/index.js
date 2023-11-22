import React, { useEffect } from 'react'
import {useState} from 'react';
import styles from './search.module.css'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';
import { useNavigate } from "react-router-dom";
import { getURL } from '../../helpers/fetchHelpers';
import { Button } from 'react-bootstrap';

const Search = () => {
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [seriesEncontradas, setSeriesEncontradas]=useState([])
  const [busqueda, setBusqueda] = useState("")
  const navigate = useNavigate();
  const cambioBusqueda = evt => {
    const elemento = evt.currentTarget;
    const nuevoValor = elemento.value;
    setBusqueda(nuevoValor);
  }
  const [tipo,setTipo]=useState("pelicula");
  const [resultadoFinal,setResultadoFinal]=useState([]);

  useEffect(()=>{
    if(peliculasEncontradas.length) {
      setResultadoFinal(peliculasEncontradas);
    } else if(seriesEncontradas.length) {
      setResultadoFinal(seriesEncontradas)
    }
  }, [seriesEncontradas,peliculasEncontradas])

  const clickBotonSearch = () => {
    const params = {
      query: busqueda,
      include_adult: false,
      page:1
    }

    if(tipo==="pelicula"){
      getURL(`search/movie`, params)
      .then(data => {
        let peliculas = data.results.map(cadena => ({
          "original_title": cadena.title,
          "release_date": cadena.release_date,
          "id": cadena.id,
          "img": cadena.poster_path
        }));
        setPeliculasEncontradas(peliculas);
        setSeriesEncontradas([]);
      })
    }else if(tipo==="serie"){
      getURL(`search/tv`, params)
      .then(data => {
        let series = data.results.map(cadena => ({
          "original_title": cadena.name,
          "release_date": cadena.release_date,
          "id": cadena.id,
          "img": cadena.poster_path
        }));
        setSeriesEncontradas(series);
        setPeliculasEncontradas([]);
      })
    }
    
  }

  const eventoIntroBusqueda = (evt) => {
    if(evt.keyCode == 13) {
      clickBotonSearch()
    }
  }

  const eventoCambiarTipo = (evt) => {
    setTipo(evt.target.value);
  }

  return (
    <div className={styles.search}>
      <h1>Buscador</h1>
      <input value={busqueda} onChange={cambioBusqueda} onKeyDown={ eventoIntroBusqueda } />
      <Button onClick={clickBotonSearch} className={styles.paco}>Buscar</Button>
      <br />
      <input type="radio" name="tipo" value="pelicula" checked={tipo==="pelicula"} onChange={eventoCambiarTipo}></input> <label>Pelicula </label>  &nbsp;
      <input type="radio" name="tipo" value="serie" checked={tipo==="serie"} onChange={eventoCambiarTipo}></input> <label>Serie</label>
      
      
      <div className={styles.resultados}>
        
        {!!(resultadoFinal.length)&&
          resultadoFinal.map(
            item => <ItemResultadoBusqueda
              onClick={
                e => navigate(`/Info/${tipo === "pelicula" ? "p": "s"}/${item.id}`)
              }
              key={item.id}
              title={item.original_title}
              img={item.img}
            />
          )
        }
      </div>
    </div>
  )
}
export default Search