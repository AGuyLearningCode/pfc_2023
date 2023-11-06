import React from 'react'

const DatosDePelicula = (props) => {
    console.log(props.pelicula);
    return (
        <div>
            <p>ESTOS SON LOS DATOS DE LA PELÍCULA.</p>
            <p><img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.pelicula.poster_path} /></p>
            <p>Título: {props.pelicula.title} &nbsp;(<i>{props.pelicula.original_title}</i>)</p>
            <p>Duración: {props.pelicula.runtime} minutos</p>
            <p>Año: {props.pelicula.release_date}</p>
            <p>Sinopsis: {props.pelicula.overview}</p>
            <p>Valoración: {props.pelicula.vote_average}/10</p>
            <p>Popularidad: {props.pelicula.popularity}</p>
            <p>Coste: ${new Intl.NumberFormat().format(props.pelicula.budget)}</p>
            <p>Recaudación: ${new Intl.NumberFormat().format(props.pelicula.revenue)}</p>
            <p>Beneficios: ${new Intl.NumberFormat().format(props.pelicula.revenue-props.pelicula.budget) }</p>
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
