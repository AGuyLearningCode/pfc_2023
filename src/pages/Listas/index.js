import React from 'react'
import { useState, useEffect } from 'react';
import styles from './listas.module.css';
import { ListasManager } from '../../helpers/ListasManager';
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemFavorito from '../../components/ItemFavorito';

const Listas = () => {
    const listasManager = new ListasManager();
    const [favoritos, setFavoritos] = useState(listasManager.getFavoritos());
    const [filtrosPeliculas, setFiltrosPeliculas] = useState([])
    const [filtrosActivosPeliculas, setFiltrosActivosPeliculas] = useState([])
    const [filtrosSeries, setFiltrosSeries] = useState([])
    const [filtrosActivosSeries, setFiltrosActivosSeries] = useState([])


    useEffect(() => {
        const generosPeliculas = favoritos.filter(p => p.tipo === "p").flatMap((f) => f.generos).filter((g, i, a) => a.slice(0, i).map(e => e.id).indexOf(g.id) === -1)
        setFiltrosPeliculas(generosPeliculas)

        const generosSeries = favoritos.filter(p => p.tipo === "s").flatMap((f) => f.generos).filter((g, i, a) => a.slice(0, i).map(e => e.id).indexOf(g.id) === -1)
        setFiltrosSeries(generosSeries)

    }, [favoritos])

    const eliminarFavorito = (favorito) => {
        listasManager.eliminarFavorito(favorito)
        setFavoritos(listasManager.getFavoritos())
    }

    const cambiarFiltroPelicula = (id) => {
        if (filtrosActivosPeliculas.includes(id)) {
            setFiltrosActivosPeliculas((filtrosActivos) => [...filtrosActivos].filter(e => e !== id))
        } else {
            setFiltrosActivosPeliculas((filtrosActivos) => {
                const filtros = [...filtrosActivos];
                filtros.push(id)
                return filtros
            })
        }
    }

    const cambiarFiltroSeries = (id) => {
        if (filtrosActivosSeries.includes(id)) {
            setFiltrosActivosSeries((filtrosActivos) => [...filtrosActivos].filter(e => e !== id))
        } else {
            setFiltrosActivosSeries((filtrosActivos) => {
                const filtros = [...filtrosActivos];
                filtros.push(id)
                return filtros
            })
        }
    }


    return (
        <div className={styles.listas}>
            <h1>Películas Favoritas</h1>
            <div className={styles.menuSelector}>
                {
                    filtrosPeliculas.map(f => <React.Fragment key={f.id}><input type="checkbox" value={f.id} checked={filtrosActivosPeliculas.includes(f.id)}
                        onChange={() => cambiarFiltroPelicula(f.id)}></input> {f.name}</React.Fragment>)
                }
            </div>
            <div className="d-flex flex-wrap">
                {favoritos.filter(f => f.tipo === "p").filter(p => filtrosActivosPeliculas.length === 0 || filtrosActivosPeliculas.filter(f => p.generos.map(p => p.id).includes(f)).length > 0).map(f => <ItemFavorito favorito={f} eliminarFavorito={eliminarFavorito} key={ `${f.tipo}${f.id}`} />)}
            </div>
            <br/>
            <h1>Series Favoritas</h1>
            <div className={styles.menuSelector}>
                {
                    filtrosSeries.map(f => <React.Fragment key={f.id}><input type="checkbox" value={f.id} checked={filtrosActivosSeries.includes(f.id)}
                        onChange={() => cambiarFiltroSeries(f.id)}></input> {f.name}</React.Fragment>)
                }
            </div>
            <div className="d-flex flex-wrap">
                {favoritos.filter(f => f.tipo === "s").filter(p => filtrosActivosSeries.length === 0 || filtrosActivosSeries.filter(f => p.generos.map(p => p.id).includes(f)).length > 0).map(f => <ItemFavorito favorito={f} eliminarFavorito={eliminarFavorito} key={ `${f.tipo}${f.id}`} />)}
            </div>

        </div>
    )
}

export default Listas