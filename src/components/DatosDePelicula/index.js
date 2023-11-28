import React from 'react'
import itemplaceholder from '../../assets/imagenes/Item-placeholder_3.png'
import styles from './datosdepelicula.module.css';

const DatosDePelicula = (props) => {
    if (Object.keys(props.pelicula).length === 0) {
        return <></>
    }

    return (
        <div className={styles.datosdepelicula} id="datos-peli">

            {/* IMÁGENES */}
            <div className={styles.blackdrop}>
                <img src={props.pelicula.backdrop_path ? "https://image.tmdb.org/t/p/original/" + props.pelicula.backdrop_path : itemplaceholder} />
            </div>
            <div className={styles.poster}>
                <img src={props.pelicula.poster_path ? "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.pelicula.poster_path : itemplaceholder} />
            </div>
            {/* DATOS */}
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

            <div className={styles.ano}>
                <h1 className="titulo_ano">
                    [{props.tipo === "p" ? props.pelicula.release_date : props.pelicula.first_air_date}]
                </h1>
            </div>

            <div className={styles.director}>
                <h2> {
                    props.tipo === "p" ?
                        (props.actores.crew && props.actores.crew.filter(a => a.job === "Director").map(e => `Director: ${e.name}`).join(", "))
                        :
                        props.pelicula.created_by && props.pelicula.created_by.map(p => `Creador: ${p.name}`).join(", ")
                }</h2>
            </div>

            {props.tipo === "s" &&
                <div className={styles.tiempoEmision}>
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

            <div className={styles.genero}>
                <p>Género: </p> <ul>{props.pelicula.genres && props.pelicula.genres.map(e => { return <li key={e.id}>{e.name}</li> })}</ul>
            </div>
            <div className={styles.pais}>
                <p>País: </p>  <ul>{props.pelicula.production_countries && props.pelicula.production_countries.map(e => { return <li key={e.iso_3166_1}>{e.name}</li> })}</ul>
            </div>
            <div className={styles.idioma}>
                <p>Idioma: </p> <ul>{props.pelicula.spoken_languages && props.pelicula.spoken_languages.map(e => { return <li key={e.english_name}>{e.name}</li> })}</ul>
            </div>
            {props.tipo === "p" && (
                <div className={styles.duracion}>
                    <p>Duración: {props.pelicula.runtime} minutos</p>
                </div>
            )}
            <div className={styles.valoracion}>
                <p>Valoración: {props.pelicula.vote_average}/10</p>
            </div>
            <div className={styles.popularidad}>
                <p>Popularidad: {props.pelicula.popularity}</p>
            </div>

            <p>
                {props.pelicula.overview && props.pelicula.overview.length > 0 ?
                     `Sinopsis: ${props.pelicula.overview}`
                     :
                     "Sinopsis: No hay sinopsis en español."
                }
            </p>

            <details>
                <summary>Actores</summary>
                <ul>
                    {props.actores.cast && props.actores.cast.map(
                        e => {
                            return <li key={e.cast_id}>
                                {e.name}
                            </li>
                        }
                    )}
                </ul>
            </details>
            {props.tipo === "p" &&
                <>
                    <p>Coste: ${new Intl.NumberFormat().format(props.pelicula.budget)}</p>
                    <p>Recaudación: ${new Intl.NumberFormat().format(props.pelicula.revenue)}</p>
                    <p>Beneficios: ${new Intl.NumberFormat().format(props.pelicula.revenue - props.pelicula.budget)}</p>
                </>
            }
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
