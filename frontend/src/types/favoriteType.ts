export interface FavoriteStoreType {
    favorites: favoriteType[];
    setFavorites: (data: favoriteType[]) => void;
    addToFavorite: (dara: favoriteType) => void;
    removeFromFavorite: (id: string) => void;
}

export interface favoriteType {
    id: string;
    userId: string;
}