import React from 'react'
import ItemResultadoBusqueda from '../../components/ItemResultadoBusqueda'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getURL } from '../../helpers/fetchHelpers';

const Proximamente = () => {

    const [proxima, setProxima] = useState([]);
    const navigate = useNavigate();
    const [tipo,setTipo]=useState(`p`);

    useEffect(() => {
        if(tipo==="p"){
            getURL("movie/upcoming").then(resultado => {
                setProxima(resultado.results);
            });
        }else if(tipo==="s"){
            const fechaActual = new Date();
            const timeStampManana = fechaActual.getTime()+1000*60*60*24;
            const fechaManana = new Date(timeStampManana);
            const cadenaFecha = `${fechaManana.getFullYear()}-${fechaManana.getMonth()+1}-${fechaManana.getDate()}`;
            getURL(`discover/tv`, {
                sort_by: "first_air_date.asc",
                "first_air_date.gte": cadenaFecha
            }).then(resultado => {
                console.log(resultado.results);
                setProxima(resultado.results);
            });
        }
        
    }, [tipo]);

    const cambioTipo=(evt=>{
        setTipo(evt.target.value);
    });


    return (
        // <div className={styles.resultado}>
        <div className="resultados">
            <h1>Próximos estrenos</h1>
            <label><input type="radio" value="p" checked={tipo=="p"} onChange={cambioTipo}></input> Películas </label> &nbsp;
            <label><input type="radio" value="s" checked={tipo=="s"} onChange={cambioTipo}></input> Series</label>
            {
                proxima.map(
                    pr => (
                        <ItemResultadoBusqueda
                            key={pr.id}
                            img={pr.poster_path}
                            title={tipo === "p" ? pr.title: pr.name}
                            onClick={
                                pro=>(
                                    navigate(`/info/${tipo}/${pr.id}`)
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