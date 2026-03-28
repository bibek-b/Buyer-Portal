import { create } from "zustand";
import type { FavoriteStoreType, favoriteType } from "../types/favoriteType";
import { storage } from "../utils/storage";

const STORAGE_KEY = "favorites";

export const useFavoriteStore = create<FavoriteStoreType>((set) => ({
  favorites: storage.get<favoriteType[]>(STORAGE_KEY) || [],
  setFavorites: (data: favoriteType[]) => {
    storage.set(STORAGE_KEY, data);
    set({ favorites: data });
  },
  addToFavorite: (data: favoriteType) =>
    set((state) => {
      const updated = [...state.favorites, data];
      storage.set(STORAGE_KEY, updated);
      return { favorites: updated };
    }),
  removeFromFavorite: (id: string) =>
    set((state) => {
      const updated = state.favorites.filter((s) => s.id !== id);
      storage.set(STORAGE_KEY, updated);
      return { favorites: updated };
    }),
}));
