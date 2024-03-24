import React, { useEffect, useState } from 'react';
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import estrella from '../../assets/imagenes/estrella.png';
import favorito from '../../assets/imagenes/favorito.png';
import styles from './movieData.module.css';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FavouriteManager } from '../../helpers/FavouriteManager';
import CountryFlag from '../CountryFlag';

/*Llamada de registro de ChartJS
* Este es el único componente que usa el ChartJS y el método register debe ser llamado solo una
* vez. Y por eso no está dentro del componente.
*/
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
const MovieData = (props) => {
    // VARIABLES DE ESTADO
    const [revenue, setRevenue] = useState({
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
    const vote_average = props.movie.vote_average || 0;
    const popularity = props.movie.popularity || 0;

    // const popularidad = 53785
    // Calcular los valores para el gráfico circular
    const radio = 40;
    const crownSize = 2 * Math.PI * radio;
    const vote_averageDasharray = `${(vote_average / 10) * crownSize} ${crownSize}`;
    const popularityDasharray = `${(popularity / 200) * crownSize} ${crownSize}`;
    const [isFavourite, setIsFavourite] = useState(false)

    // FUNCIONES:
    useEffect(() => {
        if (Object.keys(props.movie).length === 0) {
            return;
        }
        setRevenue({
            labels: ['Coste', 'Recaudación', 'Beneficios'],
            datasets: [
                {
                    label: 'Valores en $',
                    data: [props.movie.budget, props.movie.revenue, props.movie.revenue - props.movie.budget],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                },
            ],
        });
    }, [props.movie]);

    /**
     * Función que guarda o quita la película en los favoritos.
     * @param {*} evt 
     */
    const toggleFavorito = (evt) => {
        const listManager = new FavouriteManager();
        const favourite = { 
            type: props.type, 
            id: props.movie.id, 
            name: props.movie.title || props.movie.name,
            poster: props.movie.poster_path, 
            genrers: props.movie.genres }
        if (!isFavourite) {
            listManager.insertFavourite(favourite)
        } else {
            listManager.deleteFavourite(favourite)
        }

        setIsFavourite(!isFavourite)
    }

    useEffect(() => {
        if (!props.movie) {
            return;
        }
        const listManager = new FavouriteManager();
        const favourite = { type: props.type, id: props.movie.id }
        setIsFavourite(listManager.isFavourite(favourite))
    }, [props.movie])


    if (Object.keys(props.movie).length === 0) {
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
                            <img src={props.movie.backdrop_path ? "https://image.tmdb.org/t/p/original/" + props.movie.backdrop_path : itemplaceholder} />
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
                                <img src={props.movie.poster_path ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.movie.poster_path : itemplaceholder} />
                            </div>
                            
                        </Row>
                        <div className={styles.colLeft}>
                        <Row>
                            <Button onClick={toggleFavorito} className={styles.favLocation}>{
                                isFavourite ?
                                    <img src={estrella} className={styles.icon}></img>
                                    :
                                    <img src={favorito} className={styles.icon}></img>
                            }</Button>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className={styles.graphTitle}>Valoración:</h1>
                                <div className={styles.circularCrown}>
                                    <svg className={styles.crownSvg} width="100" height="100">
                                        {/* Corona para la valoración */}
                                        {vote_average < 5 ?
                                            (<>
                                                <circle
                                                    className={styles.averageCrown}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#ff0000" //ROJO
                                                    strokeWidth="20"
                                                    strokeDasharray={vote_averageDasharray}
                                                />
                                                <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {vote_average}
                                                </text>
                                            </>)
                                            :
                                            (<>
                                                <circle
                                                    className={styles.averageCrown}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#309e0e" //VERDE
                                                    strokeWidth="20"
                                                    strokeDasharray={vote_averageDasharray}
                                                />
                                                <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {vote_average}
                                                </text>
                                            </>)
                                        }
                                    </svg>
                                </div>
                            </Col>
                            <Col>
                                <h1 className={styles.graphTitle}>Popularidad:</h1>
                                <div className={styles.circularCrown}>
                                    <svg className={styles.coronaSvg} width="100" height="100">
                                        {/* Corona para la popularidad */}
                                        {popularity < 100 ?
                                            (<>
                                                <circle
                                                    className={styles.popularityCrown}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#ff0000" //ROJO
                                                    strokeWidth="20"
                                                    strokeDasharray={popularityDasharray}
                                                />

                                                {/* Texto en el centro */}
                                                <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {Math.round(popularity * 100) / 100}
                                                </text>
                                            </>
                                            )
                                            :
                                            (<>
                                                <circle
                                                    className={styles.popularityCrown}
                                                    r={radio}
                                                    cx="50%"
                                                    cy="50%"
                                                    stroke="#309e0e" //VERDE
                                                    strokeWidth="20"
                                                    strokeDasharray={popularityDasharray}
                                                />

                                                {/* Texto en el centro */}
                                                < text x="50%" y="50%" textAnchor="middle" dy="0.3em" fill="#000" fontSize="16">
                                                    {Math.round(popularity * 100) / 100}
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
                                <p>Género: </p> <ul>{props.movie.genres && props.movie.genres.map(e => { return <li key={e.id}>{e.name}</li> })}</ul>
                            </div>
                        </Row>
                        <Row>
                            {/* PAIS */}
                            <div className="mt-4"> 
                                <p>País: </p>  <ul>{props.movie.production_countries && props.movie.production_countries.map(e => { return <CountryFlag country={e} key={e.iso_3166_1} /> })}</ul>
                            </div>
                        </Row>
                        <Row>
                            {/* IDIOMA */}
                            <div className="mt-4">
                                <p>Idioma: </p> <ul>{props.movie.spoken_languages && props.movie.spoken_languages.map(e => { return <li key={e.english_name}>{e.name}</li> })}</ul>
                            </div>
                        </Row>
                        <Row>
                            {/* DURACIÓN */}
                            {props.type === "p" && (
                                <div className="mt-4">
                                    <p>Duración: {props.movie.runtime} minutos</p>
                                </div>
                            )}
                            {/* Tiempo en emisión */}
                            {props.type === "s" &&
                                <div className="mt-4">
                                    <p>Años de emisión: Del {
                                        props.type === "p" ?
                                            props.movie.release_date
                                            :
                                            props.movie.first_air_date
                                    }hasta el {
                                            props.type === "p" ?
                                                props.movie.release_date
                                                :
                                                props.movie.last_air_date
                                        }
                                    </p>
                                </div>
                            }
                        </Row>
                        <Row>
                            {/* GRÁFICO ECONÓMICO */}
                            {props.type === "p" &&
                                <div className={styles.economicGraph}>
                                    <Radar data={revenue} />
                                </div>
                            }
                        </Row>
                        <Row>
                            {props.type === "s" &&
                                (props.movie.status === "Returning Series" ? "En emision" : "Ya Terminada")
                            }
                        </Row>

                    </div>
                </Col >
                <Col lg={9}>

                    <div className={styles.colRight}>
                            {/**
                            * Tipo p representa la película y el s la serie. Debido a que los campos de
                            * los objetos tienen distintos nombres, entonces tenemos que comparar el tipo
                            * constantemente con estas constantes.
                        */}
                        <Row>
                            <div className={styles.title}>
                                <h1>{
                                    props.type === "p" ?
                                        props.movie.title
                                        :
                                        props.movie.name
                                } &nbsp;(<i>{
                                    props.type === "p" ?
                                        props.movie.original_title
                                        :
                                        props.movie.original_name
                                }</i>)</h1>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <h1>
                                    [{props.type === "p" ? props.movie.release_date : props.movie.first_air_date}]
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <div className={styles.director}>
                                <h2> {
                                    props.type === "p" ?
                                        (props.actors.crew && props.actors.crew.filter(a => a.job === "Director").map(e => `Director: ${e.name}`).join(", "))
                                        :
                                        props.movie.created_by && `Creador: ${props.movie.created_by.map(p => `${p.name}`).join(", ")}`
                                }</h2>
                            </div>
                        </Row>
                        <Row>
                            <p>
                                {props.movie.overview && props.movie.overview.length > 0 ?
                                    `Sinopsis: ${props.movie.overview}`
                                    :
                                    "Sinopsis: No hay sinopsis en español."
                                }
                            </p>
                        </Row>
                        <Row>
                            <details>
                                <summary>actors</summary>
                                <ul>
                                    {props.actors.cast && props.actors.cast.map(
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
                            {props.type === "s" && (
                                <>
                                    <p>Temporadas: {props.movie.number_of_seasons}</p>
                                    <p>Episodios: {props.movie.number_of_episodes}</p>
                                    <p>Duración media de episodio: {props.movie.episode_run_time} minutos</p>
                                    <details>
                                        <summary>
                                            Temporadas:
                                        </summary>
                                        <ul>
                                            {props.movie.seasons && props.movie.seasons.map(e => { return <li key={e.season_number}>{e.name} ({e.episode_count} episodios)</li> })}
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

export default MovieData
