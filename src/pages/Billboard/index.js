import React from 'react'
import { getURL } from '../../helpers/fetchHelpers'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './billboard.module.css';
import MovieList from '../../components/MovieList';
import { mapMovie, mapSeries } from '../../helpers/mapHelpers';

/**
 * Aquí se determina el diseño de la página donde se muestran las series/películas que están
 * en emisión/cartelera actualmente.
 */
const Billboard = () => {

    const [movies, setMovies] = useState([]);
    const [type, setType]=useState(`p`);

    useEffect(() => {
        if (type==="p"){
            getURL("movie/now_playing").then(result => {
                setMovies(result.results.map(mapMovie));
            });
        }else if(type==="s"){
            getURL("tv/on_the_air").then(result => {
                setMovies(result.results.map(mapSeries));
            });
        }
        
    }, [type])

    const changeType=(evt=>{
        setType(evt.target.value);
    });
    
    return (
        <div className={styles.cartelera}>
            <h1>{type==="p" && `En cartelera`}{type==="s" && 'En Emisión'}</h1>
            <label><input type="radio" value="p" checked={type=="p"} onChange={changeType}></input> Películas </label> &nbsp;
            <label><input type="radio" value="s" checked={type=="s"} onChange={changeType}></input> Series</label>
            <br/>
            <br/>
            <MovieList movies={movies} type={type==="p" ? "peliculas" : "series"}></MovieList>
        </div>
    )
}

export default Billboard
