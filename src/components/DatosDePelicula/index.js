import React, { useEffect, useState } from 'react';
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import estrella from '../../assets/imagenes/estrella.png';
import favorito from '../../assets/imagenes/favorito.png';
import styles from './datosdepelicula.module.css';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ListasManager } from '../../helpers/ListasManager';
import BanderaPais from '../BanderaPais';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

/**
 * Este componente determina el diseño de la página en donde se muestran los datos del item a cargar desde la API.
 */
const DatosDePelicula = (props) => {
    // VARIABLES DE ESTADO
    const [recaudacion, setRecaudacion] = useState({
        labels: ['Coste', 'Recaudación', 'Beneficios'],
        datasets: [
            {
                label: 'Valores en $',
                data: [0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    });

    //Constantes para los gráficos vectoriales de Valoración y Popularidad.
    // Obtener los valores de valoración y popularidad de los props
    const valoracion = props.pelicula.vote_average || 0;
    const popularidad = props.pelicula.popularity || 0;

    // const popularidad = 53785
    // Calcular los valores para el gráfico circular
    const radio = 40;
    const longitudCorona = 2 * Math.PI * radio;
    const valoracionDasharray = `${(valoracion / 10) * longitudCorona} ${longitudCorona}`;
    const popularidadDasharray = `${(popularidad / 200) * longitudCorona} ${longitudCorona}`;
    const [esFavorita, setEsFavorita] = useState(false)

    // FUNCIONES:
    useEffect(() => {
        if (Object.keys(props.pelicula).length === 0) {
            return;
        }
        setRecaudacion({
            labels: ['Coste', 'Recaudación', 'Beneficios'],
            datasets: [
                {
                    label: 'Valores en $',
                    data: [props.pelicula.budget, props.pelicula.revenue, props.pelicula.revenue - props.pelicula.budget],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                },
            ],
        });
    }, [props.pelicula]);

    const toggleFavorito = (evt) => {
        const listaManager = new ListasManager();
        const favorito = { tipo: props.tipo, id: props.pelicula.id, nombre: props.pelicula.title || props.pelicula.name,
             poster: props.pelicula.poster_path, generos: props.pelicula.genres }
        if (!esFavorita) {
            listaManager.insertarFavorito(favorito)
        } else {
            listaManager.eliminarFavorito(favorito)
        }

        setEsFavorita(!esFavorita)
    }

    useEffect(() => {
        if (!props.pelicula) {
            return;
        }
        const listaManager = new ListasManager();
        const favorito = { tipo: props.tipo, id: props.pelicula.id }
        setEsFavorita(listaManager.esFavorito(favorito))
    }, [props.pelicula])


    if (Object.keys(props.pelicula).length === 0) {
        return <></>
    }

    return (
        <div className={styles.datosdepelicula} id="datos-peli">
            <Container fluid>
                {/* FILA SUPERIOR */}
                <Row>
                    <Col lg={12}>
                        {/* BACKDROP */}
                        <div className={styles.backdrop}>
                            <img src={props.pelicula.backdrop_path ? "https://image.tmdb.org/t/p/original/" + props.pelicula.backdrop_path : itemplaceholder} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} style={
                        {
                            position: "relative"
                        }
                    } >
                        <Row>
                            {/* POSTER */}
                            <div className={styles.poster}>
                                <img src={props.pelicula.poster_path ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.pelicula.poster_path : itemplaceholder} />
                            </div>
                            
                        </Row>
                        <div className={styles.colIzq}>
                        <Row>
                            <Button onClick={toggleFavorito} className={styles.favLocation}>{
                                esFavorita ?
                                    <img src={estrella} className={styles.icon}></img>
                                    :
                                    <img src={favorito} className={styles.icon}></img>
                            }</Button>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className={styles.tituloGraficos}>Valoración:</h1>
                                <div className={styles.coronaCircular}>
                                    <svg className={styles.coronaSvg} width="100" height="100">
                                        {/* Corona para la valoración */}
                                        {valoracion < 5 ?
                                            (<>
                                                <circle
                                                    className={styles.coronaValoracion}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#ff0000" //ROJO
                                                    strokeWidth="20"
                                                    strokeDasharray={valoracionDasharray}
                                                />
                                                <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {valoracion}
                                                </text>
                                            </>)
                                            :
                                            (<>
                                                <circle
                                                    className={styles.coronaValoracion}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#309e0e" //VERDE
                                                    strokeWidth="20"
                                                    strokeDasharray={valoracionDasharray}
                                                />
                                                <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {valoracion}
                                                </text>
                                            </>)
                                        }
                                    </svg>
                                </div>
                            </Col>
                            <Col>
                                <h1 className={styles.tituloGraficos}>Popularidad:</h1>
                                <div className={styles.coronaCircular}>
                                    <svg className={styles.coronaSvg} width="100" height="100">
                                        {/* Corona para la popularidad */}
                                        {popularidad < 100 ?
                                            (<>
                                                <circle
                                                    className={styles.coronaPopularidad}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#ff0000" //ROJO
                                                    strokeWidth="20"
                                                    strokeDasharray={popularidadDasharray}
                                                />

                                                {/* Texto en el centro */}
                                                <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {Math.round(popularidad * 100) / 100}
                                                </text>
                                            </>
                                            )
                                            :
                                            (<>
                                                <circle
                                                    className={styles.coronaPopularidad}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#309e0e" //VERDE
                                                    strokeWidth="20"
                                                    strokeDasharray={popularidadDasharray}
                                                />

                                                {/* Texto en el centro */}
                                                < text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {Math.round(popularidad * 100) / 100}
                                                </text>
                                            </>)
                                        }
                                    </svg>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {/* GENERO */}
                            <div className="mt-4">
                                <p>Género: </p> <ul>{props.pelicula.genres && props.pelicula.genres.map(e => { return <li key={e.id}>{e.name}</li> })}</ul>
                            </div>
                        </Row>
                        <Row>
                            {/* PAIS */}
                            <div className="mt-4"> 
                                <p>País: </p>  <ul>{props.pelicula.production_countries && props.pelicula.production_countries.map(e => { return <BanderaPais pais={e} key={e.iso_3166_1} /> })}</ul>
                            </div>
                        </Row>
                        <Row>
                            {/* IDIOMA */}
                            <div className="mt-4">
                                <p>Idioma: </p> <ul>{props.pelicula.spoken_languages && props.pelicula.spoken_languages.map(e => { return <li key={e.english_name}>{e.name}</li> })}</ul>
                            </div>
                        </Row>
                        <Row>
                            {/* DURACIÓN */}
                            {props.tipo === "p" && (
                                <div className="mt-4">
                                    <p>Duración: {props.pelicula.runtime} minutos</p>
                                </div>
                            )}
                            {/* Tiempo en emisión */}
                            {props.tipo === "s" &&
                                <div className="mt-4">
                                    <p>Años de emisión: Del {
                                        props.tipo === "p" ?
                                            props.pelicula.release_date
                                            :
                                            props.pelicula.first_air_date
                                    }hasta el {
                                            props.tipo === "p" ?
                                                props.pelicula.release_date
                                                :
                                                props.pelicula.last_air_date
                                        }
                                    </p>
                                </div>
                            }
                        </Row>
                        <Row>
                            {/* GRÁFICO ECONÓMICO */}
                            {props.tipo === "p" &&
                                <div className={styles.graficoEconomico}>
                                    <Radar data={recaudacion} />
                                </div>
                            }
                        </Row>
                        <Row>
                            {props.tipo === "s" &&
                                props.pelicula.status === "Returning Series" ? "En emision" : "Ya Terminada"
                            }
                        </Row>

                    </div>
                </Col >
                <Col lg={9}>

                    <div className={styles.colDer}>

                        <Row>
                            <div className={styles.titulo}>
                                <h1 className="titulo_nombre">{
                                    props.tipo === "p" ?
                                        props.pelicula.title
                                        :
                                        props.pelicula.name
                                } &nbsp;(<i>{
                                    props.tipo === "p" ?
                                        props.pelicula.original_title
                                        :
                                        props.pelicula.original_name
                                }</i>)</h1>
                            </div>
                        </Row>
                        <Row>
                            <div className={styles.ano}>
                                <h1 className="titulo_ano">
                                    [{props.tipo === "p" ? props.pelicula.release_date : props.pelicula.first_air_date}]
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <div className={styles.director}>
                                <h2> {
                                    props.tipo === "p" ?
                                        (props.actores.crew && props.actores.crew.filter(a => a.job === "Director").map(e => `Director: ${e.name}`).join(", "))
                                        :
                                        props.pelicula.created_by && `Creador: ${props.pelicula.created_by.map(p => `${p.name}`).join(", ")}`
                                }</h2>
                            </div>
                        </Row>
                        <Row>
                            <p>
                                {props.pelicula.overview && props.pelicula.overview.length > 0 ?
                                    `Sinopsis: ${props.pelicula.overview}`
                                    :
                                    "Sinopsis: No hay sinopsis en español."
                                }
                            </p>
                        </Row>
                        <Row>
                            <details>
                                <summary>Actores</summary>
                                <ul>
                                    {props.actores.cast && props.actores.cast.map(
                                        e => {
                                            return <li key={e.id}>
                                                {e.name}
                                            </li>
                                        }
                                    )}
                                </ul>
                            </details>
                        </Row>
                        <Row>
                            {props.tipo === "s" && (
                                <>
                                    <p>Temporadas: {props.pelicula.number_of_seasons}</p>
                                    <p>Episodios: {props.pelicula.number_of_episodes}</p>
                                    <p>Duración media de episodio: {props.pelicula.episode_run_time} minutos</p>
                                    <details>
                                        <summary>
                                            Temporadas:
                                        </summary>
                                        <ul>
                                            {props.pelicula.seasons && props.pelicula.seasons.map(e => { return <li key={e.season_number}>{e.name} ({e.episode_count} episodios)</li> })}
                                        </ul>
                                    </details>
                                    <br />
                                </>
                            )}
                        </Row>
                    </div>
                    {/* <Row>
                            <div className={styles.trailer}>
                                PENDIENTE DE INTEGRAR TRAILERS DESDE API
                            </div>
                        </Row> */}
                </Col>
            </Row >
        </Container >
    {/* PLACEHOLDER DE FOOTER: */ }
    < br ></br >
        </div >
    )
}

export default DatosDePelicula
//https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8pxDkTTaOHOSWXnjA6X8bR7I3yg.jpg
// "adult": false,
//     "backdrop_path": "/3hU0tavXwvqydaoV728O6NbNiLP.jpg",
//     "belongs_to_collection": null,
//     "budget": 25000000,
//     "genres": [
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 10402,
//             "name": "Music"
//         }
//     ],
//     "homepage": "http://augustrushmovie.warnerbros.com/",
//     "id": 5123,
//     "imdb_id": "tt0426931",
//     "original_language": "en",
//     "original_title": "August Rush",
//     "overview": "Lyla and Louis, a singer and a musician, fall in love, but are soon compelled to separate. Lyla is forced to give up her newborn but unknown to her, he grows up to become a musical genius.",
//     "popularity": 24.292,
//     "poster_path": "/oA6ZeICPINiS6YtD5WZeBaGVmuT.jpg",
//     "production_companies": [
//         {
//             "id": 174,
//             "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//             "name": "Warner Bros. Pictures",
//             "origin_country": "US"
//         },
//         {
//             "id": 3539,
//             "logo_path": null,
//             "name": "Odyssey Entertainment",
//             "origin_country": "GB"
//         },
//         {
//             "id": 30131,
//             "logo_path": null,
//             "name": "Southpaw Entertainment",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2007-11-21",
//     "revenue": 66122026,
//     "runtime": 114,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "An incredible journey moving at the speed of sound.",
//     "title": "August Rush",
//     "video": false,
//     "vote_average": 7.386,
//     "vote_count": 2530
// }
