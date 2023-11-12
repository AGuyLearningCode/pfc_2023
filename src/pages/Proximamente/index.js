import React from 'react'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getURL } from '../../helpers/fetchHelpers';

const Proximamente = () => {

    const [proxima, setProxima] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getURL("movie/upcoming").then(resultado => {
            setProxima(resultado.results);
        },[]);
    });

    return (
        // <div className={styles.resultado}>
        <div className="resultados">
            <h1>Próximamente en cartelera:</h1>
            {
                proxima.map(
                    pr => (
                        <ItemResultadoBusqueda
                            key={pr.id}
                            img={pr.poster_path}
                            onClick={
                                pro=>(
                                    navigate(`/info/${pr.id}`)
                                )
                            }
                        />
                    )
                )
            }
        </div>
    )
}

export default Proximamente