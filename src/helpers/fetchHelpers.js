
/**
 * Esta es una función auxiliar para hacer las peticiones a los Endpoints de TheMovieDB.com
 */
export const getURL = (endpoint, params = {}) => {
    const query = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&")

    return fetch(`https://api.themoviedb.org/3/${endpoint}?language=es&${query}`, {
        headers: {
          // Si se expira este token habrá que actualizarlo.
          // Una posible mejora es poner el token dentro del archivo de configuración.
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU0M2FjODg2ZTNmMmFiNzk1YmRjOGExMzY1NGE2MCIsInN1YiI6IjY1MzZlNmM0NDA4M2IzMDEzNzEzNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqoDP60qX3AiwObHa7-e2Kz6KL3irRWTzDPgmyPB53U',
          'accept': 'application/json'
        }
      }).then( response => response.json())

}


