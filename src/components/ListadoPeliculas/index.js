import React from 'react';
import styles from './listadoPeliculas.module.css';
import ItemResultadoBusqueda from '../ItemResultadoBusqueda';
import { useNavigate } from "react-router-dom";

const ListadoPeliculas = (props) => {
    const navigate = useNavigate();
    return (
        <div className={styles.resultados}>

            {!!(props.peliculas) &&
                props.peliculas.map(
                    item => <ItemResultadoBusqueda
                        onClick={
                            e => navigate(`/Info/${props.tipo === "peliculas" ? "p" : "s"}/${item.id}`)
                        }
                        key={item.id}
                        title={item.original_title}
                        img={item.img}
                        date={item.release_date}
                    />
                )
            }
        </div>

    )
}

export default ListadoPeliculas
