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
        })
    });

    return (
        <div>
            <h1>Esta es la sección de próximos estrenos</h1>
            {
                proxima.map(
                    pr => (
                        <ItemResultadoBusqueda
                            img={pr.poster_path}
                            onClick={
                                pr=>(
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