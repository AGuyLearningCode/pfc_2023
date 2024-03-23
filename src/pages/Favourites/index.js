import React from 'react'
import { useState, useEffect } from 'react';
import styles from './Favourites.module.css';
import { FavouriteManager } from '../../helpers/FavouriteManager';
import FavouriteItem from '../../components/FavouriteItem';
/**
 * Aquí se determina el diseño de la página de favoritos.
 */
const Favourites = () => {
    const favouriteManager = new FavouriteManager();
    const [favourites, setFavourites] = useState(favouriteManager.getFavourites());
    /*
    filtrosPeliculas y filtrosSeries sirven para listar todas las categorías de películas y series que tenemos
    disponibles de acuerdo con nuestros favoritos.
    filtrosActivosPeliculas y filtrosActivosSeries son las listas en donde se almacenan cuales 
    son las categorías que el usuario está filtrando.
    */
    const [movieFilters, setMovieFilters] = useState([])
    const [activeMovieFilters, setActiveMovieFilters] = useState([])
    const [seriesFilters, setSeriesFilters] = useState([])
    const [seriesActiveFilters, setSeriesActiveFilters] = useState([])


    useEffect(() => {
        const movieGenrer = favourites.filter(p => p.tipo === "p").flatMap((f) => f.generos).filter((g, i, a) => a.slice(0, i).map(e => e.id).indexOf(g.id) === -1)
        setMovieFilters(movieGenrer)

        const seriesGenrer = favourites.filter(p => p.tipo === "s").flatMap((f) => f.generos).filter((g, i, a) => a.slice(0, i).map(e => e.id).indexOf(g.id) === -1)
        setSeriesFilters(seriesGenrer)

    }, [favourites])

    const deleteFavourite = (favourite) => {
        favouriteManager.deleteFavourite(favourite)
        setFavourites(favouriteManager.getFavourites())
    }

    const changeMovieFilter = (id) => {
        if (activeMovieFilters.includes(id)) {
            setActiveMovieFilters((activeFilters) => [...activeFilters].filter(e => e !== id))
        } else {
            setActiveMovieFilters((activeFilters) => {
                const filters = [...activeFilters];
                filters.push(id)
                return filters
            })
        }
    }

    const changeSeriesFilters = (id) => {
        if (seriesActiveFilters.includes(id)) {
            setSeriesActiveFilters((activeFilters) => [...activeFilters].filter(e => e !== id))
        } else {
            setSeriesActiveFilters((activeFilters) => {
                const filters = [...activeFilters];
                filters.push(id)
                return filters
            })
        }
    }


    return (
        <div className={styles.favourites}>
            <h1>Películas Favoritas</h1>
            <div className={styles.menuSelector}>
                {
                    movieFilters.map(f => <div key={f.id}><input type="checkbox" value={f.id} checked={activeMovieFilters.includes(f.id)}
                        onChange={() => changeMovieFilter(f.id)}></input> {f.name}</div>)
                }
            </div>
            <div className="d-flex flex-wrap">
                {favourites.filter(f => f.tipo === "p").filter(p => activeMovieFilters.length === 0 || activeMovieFilters.filter(f => p.generos.map(p => p.id).includes(f)).length > 0).map(f => <FavouriteItem favourite={f} deleteFavourite={deleteFavourite} key={ `${f.tipo}${f.id}`} />)}
            </div>
            <br/>
            <h1>Series Favoritas</h1>
            <div className={styles.menuSelector}>
                {
                    seriesFilters.map(f => <div key={f.id}><input type="checkbox" value={f.id} checked={seriesActiveFilters.includes(f.id)}
                        onChange={() => changeSeriesFilters(f.id)}></input> {f.name}</div>)
                }
            </div>
            <div className="d-flex flex-wrap">
                {favourites.filter(f => f.tipo === "s").filter(p => seriesActiveFilters.length === 0 || seriesActiveFilters.filter(f => p.generos.map(p => p.id).includes(f)).length > 0).map(f => <FavouriteItem favourite={f} deleteFavourite={deleteFavourite} key={ `${f.tipo}${f.id}`} />)}
            </div>

        </div>
    )
}

export default Favourites