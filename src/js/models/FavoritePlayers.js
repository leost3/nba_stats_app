export const favoritePlayers = class Favorites{
    constructor() {
        this.favorites = [];
    }

    addFavorite(id, position, number, lastName, firstName, experience) {
        const favorites = {id, position, number, lastName, firstName, experience};
        this.favorites.push(favorites);
        return this.favorites;
    }

    deleteFavorite(id) {
        const index = this.favorites.findIndex(el => el.id === parseInt(id));
        console.log({index})
        this.favorites.splice(index,1);
    }

    isFavorite(id) {
      return this.favorites.findIndex(el => el.id === parseInt(id)) !== -1;
    }

    getNumFavorites() {
        return this.favorites.length;
    }
}