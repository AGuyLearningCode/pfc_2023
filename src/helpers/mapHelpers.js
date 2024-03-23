
/**
 * Estas son funciones de mapeo(filtrado de campos) para que 
 * nos entregue los valores solo con los campos que se usan 
 * en la función maps de los arrays de películas/series.
 */
const mapMovie = (movie) =>({
    "original_title": movie.title,
    "release_date": movie.release_date,
    "id": movie.id,
    "img": movie.poster_path
  })

const mapSeries = (series) =>({
    "original_title": series.name,
    "release_date": series.first_air_date,
    "id": series.id,
    "img": series.poster_path
})


const mapSeriesCommingSoon = (series) =>({
  "original_title": series.name,
  "release_date": series.next_episode_to_air.air_date,
  "id": series.id,
  "img": series.poster_path
})

export {mapMovie, mapSeries, mapSeriesCommingSoon };