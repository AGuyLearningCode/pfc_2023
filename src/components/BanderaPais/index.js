import React from 'react'
import { banderaPais } from '../../helpers/banderasPaises';
import styles from './BanderaPais.module.css'

const BanderaPais = ({ pais }) => {
    const { icono, bandera } = pais;
    return (
        // <li className={ styles.banderaPais } key={pais.english_name}>{banderaPais[pais.name]}</li>
        <li className={styles.banderaPais} key={pais.english_name}>
            <img src={bandera} alt={`Bandera de ${pais.name}`} className={styles.banderaImg} />
            <div className={styles.icono}>{icono}</div>
        </li>
    )
}
export default BanderaPais;
