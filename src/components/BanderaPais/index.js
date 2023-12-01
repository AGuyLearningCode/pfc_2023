import React from 'react'
import { banderaPais } from '../../helpers/banderasPaises';
import styles from './BanderaPais.module.css'

const BanderaPais = ({pais}) => {
    
    return (
        <li className={ styles.banderaPais } key={pais.english_name}>{banderaPais[pais.name]}</li>
    )
}
export default BanderaPais;
