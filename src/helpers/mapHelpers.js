const mapPelicula = (pelicula) =>({
    "original_title": pelicula.title,
    "release_date": pelicula.release_date,
    "id": pelicula.id,
    "img": pelicula.poster_path
  })

const mapSerie = (serie) =>({
    "original_title": serie.name,
    "release_date": serie.first_air_date,
    "id": serie.id,
    "img": serie.poster_path
})


const mapSerieProximamente = (serie) =>({
  "original_title": serie.name,
  "release_date": serie.next_episode_to_air.air_date,
  "id": serie.id,
  "img": serie.poster_path
})

export {mapPelicula, mapSerie, mapSerieProximamente };