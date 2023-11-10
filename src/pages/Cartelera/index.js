import React from 'react'
import { getURL } from '../../helpers/fetchHelpers'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Cartelera = () => {

    const [peliculas, setPeliculas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getURL("movie/now_playing").then(resultado => {
            setPeliculas(resultado.results);
        });
    }, [])




    return (
        <div>
            <h1>Esta es la cartelera</h1>

            {peliculas.map(p => <ItemResultadoBusqueda img={p.poster_path} onClick={e => (navigate(`/Info/${p.id}`))} />)}


        </div>
    )
}

export default Cartelera
