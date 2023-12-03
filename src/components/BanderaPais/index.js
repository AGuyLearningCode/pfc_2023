import React from 'react'
import { banderaPais } from '../../helpers/banderasPaises';
import styles from './BanderaPais.module.css'

const BanderaPais = ({ pais }) => {
    
    return (
        // <li className={ styles.banderaPais } key={pais.english_name}>{banderaPais[pais.name]}</li>
        <li className={styles.banderaPais}>
            <img src={banderaPais[pais.name].bandera } alt={`Bandera de ${pais.name}`} className={styles.banderaImg} />
            <div className={styles.icono}>{banderaPais[pais.name].icono}</div>
        </li>
    )
}
export default BanderaPais;
