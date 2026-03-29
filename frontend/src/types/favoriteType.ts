export interface FavoriteStoreType {
    favorites: FavoriteType[] | null;
    setFavorites: (data: FavoriteType[] | null) => void;
    addToFavorite: (dara: FavoriteType) => void;
    removeFromFavorite: (id: string) => void;
}

export interface FavoriteType {
    propertyId: string;
    userId: string;
}