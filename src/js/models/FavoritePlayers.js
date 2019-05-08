export const favoritePlayers = class Favorites{
    constructor() {
        this.favorites = [];
    }

    addFavorite(id, position, number, lastName, firstName, experience) {
        const favorites = {id, position, number, lastName, firstName, experience};
        this.favorites.push(favorites);
        this.addFavoriteToLocalStorage();
        return this.favorites;
    }
    
    deleteFavorite(id) {
        const index = this.favorites.findIndex(el => el.id === parseInt(id));
        this.favorites.splice(index,1);
        this.addFavoriteToLocalStorage();
    }

    isFavorite(id) {
      return this.favorites.findIndex(el => el.id === parseInt(id)) !== -1;
    }

    getNumFavorites() {
        return this.favorites.length;
    }

    addFavoriteToLocalStorage() {
        localStorage.setItem('likes', JSON.stringify(this.favorites))
    }

    readStorage() {
        const storage  = JSON.parse(localStorage.getItem('likes'));
        if (storage) this.favorites = storage;
    }
}