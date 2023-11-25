import React, { useEffect } from 'react'
import {useState} from 'react';
import styles from './search.module.css'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';
import { useNavigate, useParams } from "react-router-dom";
import { getURL } from '../../helpers/fetchHelpers';
import { Button } from 'react-bootstrap';

const Search = () => {
  const [peliculasEncontradas, setPeliculasEncontradas] = useState([])
  const [seriesEncontradas, setSeriesEncontradas]=useState([])
  const [busqueda, setBusqueda] = useState("")
  
  const navigate = useNavigate();
  
  const {tipo,consulta}=useParams();
  const [resultadoFinal,setResultadoFinal]=useState([]);

  useEffect(()=>{
    if(peliculasEncontradas.length) {
      setResultadoFinal(peliculasEncontradas);
    } else if(seriesEncontradas.length) {
      setResultadoFinal(seriesEncontradas)
    }
  }, [seriesEncontradas,peliculasEncontradas])

  useEffect (() => {
    const params = {
      query: consulta,
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
          "release_date": cadena.first_air_date,
          "id": cadena.id,
          "img": cadena.poster_path
        }));
        setSeriesEncontradas(series);
        setPeliculasEncontradas([]);
      })
    }
    
  },[tipo, consulta]);

  

  

  return (
    <div className={styles.search}>
      
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
              date={item.release_date}
            />
          )
        }
      </div>
    </div>
  )
}
export default Search