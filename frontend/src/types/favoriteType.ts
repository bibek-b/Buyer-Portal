export interface FavoriteStoreType {
    favorites: FavoriteType[];
    setFavorites: (data: FavoriteType[]) => void;
    addToFavorite: (dara: FavoriteType) => void;
    removeFromFavorite: (id: string) => void;
}

export interface FavoriteType {
    id: string;
    userId: string;
}