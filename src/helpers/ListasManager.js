const LISTA_FAVORITOS_KEY = "favs"


/**
 * Es un objeto que sirve para gestionar los favoritos en el LocalStorage del navegador del usuario.
 */
class ListasManager{

    getFavoritos() {
        const listaFavoritos = localStorage[LISTA_FAVORITOS_KEY]
        if(!listaFavoritos){
            return [];
        }
        return JSON.parse(listaFavoritos)
    }

    esFavorito(favorito) {
        const favoritos = this.getFavoritos();
        const listaFiltrada = favoritos.filter(p => p.id === favorito.id && p.tipo === favorito.tipo)
        return listaFiltrada.length > 0
    }


    insertarFavorito(favorito){
        if(this.esFavorito(favorito)){
            return
        }
        const favoritos = this.getFavoritos()
        favoritos.push(favorito)
        localStorage[LISTA_FAVORITOS_KEY] = JSON.stringify(favoritos)
    }

    eliminarFavorito(favorito) {
        if(!this.esFavorito(favorito)){
            return
        }
        const favoritos = this.getFavoritos().filter(p => p.tipo != favorito.tipo || p.id != favorito.id)
        localStorage[LISTA_FAVORITOS_KEY] = JSON.stringify(favoritos)
    }
}


export  { ListasManager };