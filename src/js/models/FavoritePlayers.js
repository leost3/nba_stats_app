export const favoritePlayers = class Favorites{
    constructor() {
        this.favorites = [];
    }

    addFavorite(id, img, name, position, number) {
        const favorites = {id, img, name, position, number};
        this.favorites.push(favorites)
    }

    deleteFavorite(id) {
        const index = this.favorites.findIndex(el => el.id === id);
        this.favorites.splice(index,1);
    }

    isFavorite(id) {
      return this.favorites.findIndex(el => el.id === id) !== -1;
    }

    getNumFavorites() {
        return this.favorites.length;
    }
}