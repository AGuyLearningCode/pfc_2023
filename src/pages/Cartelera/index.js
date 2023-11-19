import React from 'react'
import { getURL } from '../../helpers/fetchHelpers'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Cartelera = () => {

    const [peliculas, setPeliculas] = useState([]);
    const navigate = useNavigate();
    const [tipo, setTipo]=useState(`p`);

    useEffect(() => {
        if (tipo==="p"){
            getURL("movie/now_playing").then(resultado => {
                setPeliculas(resultado.results);
            });
        }else if(tipo==="s"){
            getURL("tv/on_the_air").then(resultado => {
                setPeliculas(resultado.results);
            });
        }
        
    }, [tipo])

    const cambioTipo=(evt=>{
        setTipo(evt.target.value);
    });
    
    return (
        <div>
            <h1>{tipo==="p" && `En cartelera`}{tipo==="s" && 'En Emisión'}</h1>
            <label><input type="radio" value="p" checked={tipo=="p"} onChange={cambioTipo}></input> Películas </label> &nbsp;
            <label><input type="radio" value="s" checked={tipo=="s"} onChange={cambioTipo}></input> Series</label>
            <br/>
            <br/>
            {peliculas.map(p => <ItemResultadoBusqueda img={p.poster_path} onClick={e => (navigate(`/Info/${tipo}/${p.id}`))} />)}
        </div>
    )
}

export default Cartelera
