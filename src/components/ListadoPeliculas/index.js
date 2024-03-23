import React from 'react';
import styles from './listadoPeliculas.module.css';
import SearchResultItem from '../SearchResultItem';
import { useNavigate } from "react-router-dom";


/*
 * En este componente se determina una cuadrícula sobre la cual cargar todos los resultados
 * de la búsqueda.
 */
const ListadoPeliculas = (props) => {
    const navigate = useNavigate();
    return (
        <div className={styles.resultados}>
            {!!(props.peliculas) &&
                props.peliculas.map(
                    item => <SearchResultItem
                        onClick={
                            e => navigate(`/Info/${props.tipo === "peliculas" ? "p" : "s"}/${item.id}`)
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

export default ListadoPeliculas
