import React, { useEffect, useState } from 'react';
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png';
import styles from './datosdepelicula.module.css';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Col, Container, Row } from 'react-bootstrap';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

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
                        {/* POSTER */}
                        <div className={styles.poster}>
                            <img src={props.pelicula.poster_path ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.pelicula.poster_path : itemplaceholder} />
                        </div>
                        <div className={ styles.colIzq }>
                        <Row>
                            {/* VALORACIÓN */}
                            <div className={styles.valoracion}>
                                <p>Valoración: {props.pelicula.vote_average}/10</p>
                            </div>
                        </Row>
                        <Row>
                            {/* POPULARIDAD */}
                            <div className="mt-4">
                                <p>Popularidad: {props.pelicula.popularity}</p>
                            </div>
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
                                <p>País: </p>  <ul>{props.pelicula.production_countries && props.pelicula.production_countries.map(e => { return <li key={e.iso_3166_1}>{e.name}</li> })}</ul>
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
                        {/* <Row>
                            PENDIENTE IMPLEMENTAR EL STATUS DE LA SERIE:
                            https://api.themoviedb.org/3/tv/456?language=es
                            "status": "Returning Series",
                        </Row> */}
                        
                        </div>
                    </Col>
                    <Col lg={9}>
                        <h1>adios</h1>
                    </Col>
                </Row>
            </Container>
        </div>
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
