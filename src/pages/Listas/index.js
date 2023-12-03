import React from 'react'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getURL } from '../../helpers/fetchHelpers';
import styles from './listas.module.css';
import { ListasManager } from '../../helpers/ListasManager';
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import { Button } from 'react-bootstrap';

const Listas = () => {
    const listasManager = new ListasManager();
    const [favoritos, setFavoritos] = useState(listasManager.getFavoritos());
    
    const eliminarFavorito = (favorito) => {
        listasManager.eliminarFavorito(favorito)
        setFavoritos(listasManager.getFavoritos())
    }

    return (
        // <div className={styles.resultado}>
        <div className={styles.listas}>
            <h1>Listas</h1>
            <ul>
                { favoritos.filter(f => f.tipo === "p").map(f => <li key={f.id}><img src={f.poster ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + f.poster : itemplaceholder} />{f.tipo}{f.nombre} <Button onClick={() => eliminarFavorito(f)}>Eliminar</Button></li> )  }
            </ul>
            <ul>
                { favoritos.filter(f => f.tipo === "s").map(f => <li key={f.id}><img src={f.poster ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + f.poster : itemplaceholder} />{f.tipo}{f.nombre} <Button onClick={() => eliminarFavorito(f)}>Eliminar</Button></li> )  }
            </ul>
            
        </div>
    )
}

export default Listas