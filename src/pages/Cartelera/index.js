import React from 'react'
import { getURL } from '../../helpers/fetchHelpers'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './cartelera.module.css';
import MovieList from '../../components/MovieList';
import { mapMovie, mapSeries } from '../../helpers/mapHelpers';

/**
 * Aquí se determina el diseño de la página donde se muestran las series/películas que están
 * en emisión/cartelera actualmente.
 */
const Cartelera = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [tipo, setTipo]=useState(`p`);

    useEffect(() => {
        if (tipo==="p"){
            getURL("movie/now_playing").then(resultado => {
                setPeliculas(resultado.results.map(mapMovie));
            });
        }else if(tipo==="s"){
            getURL("tv/on_the_air").then(resultado => {
                setPeliculas(resultado.results.map(mapSeries));
            });
        }
        
    }, [tipo])

    const cambioTipo=(evt=>{
        setTipo(evt.target.value);
    });
    
    return (
        <div className={styles.cartelera}>
            <h1>{tipo==="p" && `En cartelera`}{tipo==="s" && 'En Emisión'}</h1>
            <label><input type="radio" value="p" checked={tipo=="p"} onChange={cambioTipo}></input> Películas </label> &nbsp;
            <label><input type="radio" value="s" checked={tipo=="s"} onChange={cambioTipo}></input> Series</label>
            <br/>
            <br/>
            <MovieList movies={peliculas} type={tipo==="p" ? "peliculas" : "series"}></MovieList>
        </div>
    )
}

export default Cartelera
