import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import styles from './ItemFavorito.module.css';

const ItemFavorito = ({ favorito, eliminarFavorito }) => {
    return (
        <div key={favorito.id} className={styles.favoritoId}>
            <Link to={`/Info/${favorito.tipo}/${favorito.id}`} className={styles.noDeco}>
                <img src={favorito.poster ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + favorito.poster : itemplaceholder} />
                </Link>
                <div className={styles.titulo}>
                <Link to={`/Info/${favorito.tipo}/${favorito.id}`} className={styles.noDeco}>
                    {favorito.nombre}
                    </Link><br />
                    <Button onClick={() => eliminarFavorito(favorito)} className='mt-2'>Eliminar</Button>
                </div>
            
            </div>
    )
}

export default ItemFavorito
