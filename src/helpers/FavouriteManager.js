const FAVOURITE_LIST_KEY = "favs"


/**
 * Es un objeto que sirve para gestionar los favoritos en el LocalStorage del navegador del usuario.
 */
class FavouriteManager{

    getFavourites() {
        const favouriteList = localStorage[FAVOURITE_LIST_KEY]
        if(!favouriteList){
            return [];
        }
        return JSON.parse(favouriteList)
    }

    isFavourite(favourite) {
        const favourites = this.getFavourites();
        const filterList = favourites.filter(p => p.id === favourite.id && p.type === favourite.type)
        return filterList.length > 0
    }


    insertFavourite(favourite){
        if(this.isFavourite(favourite)){
            return
        }
        const favourites = this.getFavourites()
        favourites.push(favourite)
        localStorage[FAVOURITE_LIST_KEY] = JSON.stringify(favourites)
    }

    deleteFavourite(favourite) {
        if(!this.isFavourite(favourite)){
            return
        }
        const favourites = this.getFavourites().filter(p => p.type != favourite.type || p.id != favourite.id)
        localStorage[FAVOURITE_LIST_KEY] = JSON.stringify(favourites)
    }
}


export  { FavouriteManager };