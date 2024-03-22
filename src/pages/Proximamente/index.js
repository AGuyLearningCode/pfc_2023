import React from 'react'
import { useState, useEffect } from 'react';
import { getURL } from '../../helpers/fetchHelpers';
import styles from './proximamente.module.css';
import { mapPelicula, mapSerieProximamente } from '../../helpers/mapHelpers';
import ListadoPeliculas from '../../components/ListadoPeliculas';


/**
 * Aquí se determina el diseño de la página que muestro los items que se lanzarán próximamente.
 */
const Proximamente = () => {

    const [proxima, setProxima] = useState([]);
    const [tipo, setTipo] = useState(`p`);

    useEffect(() => {
        if (tipo === "p") {
            getURL("movie/upcoming").then(resultado => {
                setProxima(resultado.results.map(mapPelicula));
            });
        } else if (tipo === "s") {
            const fechaActual = new Date();
            const timeStampManana = fechaActual.getTime() + 1000 * 60 * 60 * 24;
            const fechaManana = new Date(timeStampManana);
            const cadenaFecha = `${fechaManana.getFullYear()}-${`${fechaManana.getMonth() + 1}`.padStart(2,"0")}-${ `${fechaManana.getDate()}`.padStart(2,"0")}`;
            getURL(`discover/tv`, {
                sort_by: "first_air_date.asc",
                "first_air_date.gte": cadenaFecha
            }).then(resultado => {
                return Promise.all(resultado.results.map(serie => getURL(`tv/${serie.id}`))  )                
            }).then(resultado => {
                setProxima(resultado.map(mapSerieProximamente));
            });
        }

    }, [tipo]);

    const cambioTipo = (evt => {
        setTipo(evt.target.value);
    });


    return (
        // <div className={styles.resultado}>
        <div className={styles.proximamente}>
            <h1>Próximamente</h1>
            <label><input type="radio" value="p" checked={tipo == "p"} onChange={cambioTipo}></input> Películas </label> &nbsp;
            <label><input type="radio" value="s" checked={tipo == "s"} onChange={cambioTipo}></input> Series</label>
            <br />
            <br />
            <ListadoPeliculas peliculas={proxima} tipo={tipo === "p" ? "peliculas" : "series"}></ListadoPeliculas>
        </div>
    )
}

export default Proximamente