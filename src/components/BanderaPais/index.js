import React from 'react'
import { banderaPais } from '../../helpers/banderasPaises';
import styles from './BanderaPais.module.css'

/**
 * Mostramos una imagen con la badera del pais.
 * Lo usamos principalmente en la pantalla de descripcion de la pelicula para mostrar el pais de origan.
 */
const BanderaPais = ({ pais }) => {
    let bandera;
    let icono;
    if (pais.name in banderaPais) {
        bandera = banderaPais[pais.name].bandera
        icono = banderaPais[pais.name].icono
    } else {
        bandera = "/imagenes/banderas/England.svg.png"
        icono = "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    }
    return (
        // <li className={ styles.banderaPais } key={pais.english_name}>{banderaPais[pais.name]}</li>
        <li className={styles.banderaPais}>
         <img src={ bandera } alt={`Bandera de ${pais.name}`} className={styles.banderaImg} />
            <div className={styles.icono}>{icono}</div> 
        </li>
    )
}
export default BanderaPais;
