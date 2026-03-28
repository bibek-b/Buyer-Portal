import { create } from "zustand";
import type { FavoriteStoreType, favoriteType } from "../types/favoriteType";

export const useFavoriteStore = create<FavoriteStoreType>(set => ({
    favorites: [],
    setFavorites: (data:favoriteType[]) => set({favorites: data}),
    addToFavorite: (data: favoriteType) => set(state => ({favorites: [...state.favorites, data]})),
    removeFromFavorite: (id: string) => set(state => ({favorites: state.favorites.filter(f => f.id !== id)}))
}))