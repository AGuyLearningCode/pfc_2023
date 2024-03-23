import React from 'react';
import styles from './MovieList.module.css';
import SearchResultItem from '../SearchResultItem';
import { useNavigate } from "react-router-dom";


/*
 * En este componente se determina una cuadrícula sobre la cual cargar todos los resultados
 * de la búsqueda.
 */
const MovieList = (props) => {
    const navigate = useNavigate();
    return (
        <div className={styles.result}>
            {!!(props.movies) &&
                props.movies.map(
                    item => <SearchResultItem
                        onClick={
                            e => navigate(`/Info/${props.type === "peliculas" ? "p" : "s"}/${item.id}`)
                        }
                        key={item.id}
                        title={item.original_title}
                        img={item.img}
                        date={item.release_date}
                        dateFormat={props.dateFormat}
                    />
                )
            }
        </div>

    )
}

export default MovieList
