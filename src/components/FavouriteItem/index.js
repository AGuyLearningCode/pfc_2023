import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import styles from './FavouriteItem.module.css';


/**
 * En este componente se carga el poster correspondiente al item favorito, 
 * para que en la página de listas, este aparezca con su poster.
 * Este componente sirve tanto para ver la información del item como para 
 * dar la opción de eliminarlo de la lista de favoritos.
 */
const FavouriteItem = ({ favourite, deleteFavourite }) => {
    return (
        <div key={favourite.id} className={styles.favouriteID}>
            <Link to={`/Info/${favourite.type}/${favourite.id}`} className={styles.noDeco}>
                <img src={favourite.poster ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + favourite.poster : itemplaceholder} />
                </Link>
                <div className={styles.title}>
                <Link to={`/Info/${favourite.type}/${favourite.id}`} className={styles.noDeco}>
                    {favourite.name}
                    </Link><br />
                    <Button onClick={() => deleteFavourite(favourite)} className='mt-2'>Eliminar</Button>
                </div>
            </div>
    )
}

export default FavouriteItem
