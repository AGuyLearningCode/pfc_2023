import React from 'react'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getURL } from '../../helpers/fetchHelpers';
import styles from './listas.module.css';

const Listas = () => {

    return (
        // <div className={styles.resultado}>
        <div className={styles.listas}>
            <h1>Listas</h1>
        </div>
    )
}

export default Listas