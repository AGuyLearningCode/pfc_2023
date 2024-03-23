import React from 'react'
import { useState, useEffect } from 'react';
import { getURL } from '../../helpers/fetchHelpers';
import styles from './ComingSoon.module.css';
import { mapMovie, mapSeriesCommingSoon } from '../../helpers/mapHelpers';
import MovieList from '../../components/MovieList';


/**
 * Aquí se determina el diseño de la página que muestro los items que se lanzarán próximamente.
 */
const ComingSoon = () => {

    const [next, setNext] = useState([]);
    const [type, setType] = useState(`p`);

    useEffect(() => {
        if (type === "p") {
            getURL("movie/upcoming").then(result => {
                setNext(result.results.map(mapMovie));
            });
        } else if (type === "s") {
            const currentDate = new Date();
            const timeStampTomorrow = currentDate.getTime() + 1000 * 60 * 60 * 24;
            const tomorrowDate = new Date(timeStampTomorrow);
            const dateString = `${tomorrowDate.getFullYear()}-${`${tomorrowDate.getMonth() + 1}`.padStart(2,"0")}-${ `${tomorrowDate.getDate()}`.padStart(2,"0")}`;
            getURL(`discover/tv`, {
                sort_by: "first_air_date.asc",
                "first_air_date.gte": dateString
            }).then(result => {
                return Promise.all(result.results.map(serie => getURL(`tv/${serie.id}`))  )                
            }).then(result => {
                setNext(result.map(mapSeriesCommingSoon));
            });
        }

    }, [type]);

    const changeType = (evt => {
        setType(evt.target.value);
    });


    return (
        // <div className={styles.resultado}>
        <div className={styles.comingSoon}>
            <h1>Próximamente</h1>
            <label><input type="radio" value="p" checked={type == "p"} onChange={changeType}></input> Películas </label> &nbsp;
            <label><input type="radio" value="s" checked={type == "s"} onChange={changeType}></input> Series</label>
            <br />
            <br />
            <MovieList movies={next} type={type === "p" ? "peliculas" : "series"}></MovieList>
        </div>
    )
}

export default ComingSoon