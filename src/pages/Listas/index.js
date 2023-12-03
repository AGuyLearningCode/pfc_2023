import React from 'react'
import { useState, useEffect } from 'react';
import styles from './listas.module.css';
import { ListasManager } from '../../helpers/ListasManager';
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import { Button } from 'react-bootstrap';

const Listas = () => {
    const listasManager = new ListasManager();
    const [favoritos, setFavoritos] = useState(listasManager.getFavoritos());
    const [filtrosPeliculas, setFiltrosPeliculas] = useState([])
    const [filtrosActivosPeliculas, setFiltrosActivosPeliculas] = useState([])


    useEffect(() => {
        const generos = favoritos.filter(p => p.tipo === "p").flatMap((f) => f.generos).filter((g,i,a) => a.slice(0,i).map(e => e.id).indexOf(g.id) === -1)
        setFiltrosPeliculas(generos)
    }, [favoritos])

    const eliminarFavorito = (favorito) => {
        listasManager.eliminarFavorito(favorito)
        setFavoritos(listasManager.getFavoritos())
    }

    const cambiarFiltroPelicula =(id) => {
        if(filtrosActivosPeliculas.includes(id)){
            setFiltrosActivosPeliculas((filtrosActivos) => [...filtrosActivos].filter(e => e !== id))
        } else {
            setFiltrosActivosPeliculas((filtrosActivos) => {
                const filtros = [...filtrosActivos];
                filtros.push(id)
                return filtros
            })
        }
    }

    return (
        // <div className={styles.resultado}>
        <div className={styles.listas}>
            <h1>Listas</h1>
            <div>
                {
                    filtrosPeliculas.map(f => <React.Fragment key={f.id}><input type="checkbox" value={f.id} checked={ filtrosActivosPeliculas.includes(f.id) }
                        onChange={() => cambiarFiltroPelicula(f.id)}></input> {f.name}</React.Fragment>)
                }
            </div>
            <ul>
                { favoritos.filter(f => f.tipo === "p").filter(p => filtrosActivosPeliculas.length === 0 || filtrosActivosPeliculas.filter(f => p.generos.map(p => p.id).includes(f)).length > 0).map(f => <li key={f.id}><img src={f.poster ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + f.poster : itemplaceholder} />{f.tipo}{f.nombre} <Button onClick={() => eliminarFavorito(f)}>Eliminar</Button></li> )  }
            </ul>
            <ul>
                { favoritos.filter(f => f.tipo === "s").map(f => <li key={f.id}><img src={f.poster ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + f.poster : itemplaceholder} />{f.tipo}{f.nombre} <Button onClick={() => eliminarFavorito(f)}>Eliminar</Button></li> )  }
            </ul>
            
        </div>
    )
}

export default Listas