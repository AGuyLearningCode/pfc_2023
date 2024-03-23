import React from 'react'
import { countryFlags } from '../../helpers/countryFlags';
import styles from './CountryFlag.module.css'

/**
 * Mostramos una imagen con la badera del pais.
 * Lo usamos principalmente en la pantalla de descripcion de la pelicula para mostrar el pais de origan.
 */
const CountryFlag = ({ country }) => {
    let flag;
    let icon;
    if (country.name in countryFlags) {
        flag = countryFlags[country.name].flag
        icon = countryFlags[country.name].icon
    } else {
        flag = "/imagenes/banderas/England.svg.png"
        icon = "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    }
    return (
        // <li className={ styles.banderaPais } key={pais.english_name}>{banderaPais[pais.name]}</li>
        <li className={styles.countryFlag}>
         <img src={ flag } alt={`Bandera de ${country.name}`}/>
            <div>{icon}</div> 
        </li>
    )
}
export default CountryFlag;
