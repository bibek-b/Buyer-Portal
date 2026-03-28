import { create } from "zustand";
import type { FavoriteStoreType, FavoriteType } from "../types/favoriteType";
import { storage } from "../utils/storage";

const STORAGE_KEY = "favorites";

export const useFavoriteStore = create<FavoriteStoreType>((set) => ({
  favorites: storage.get<FavoriteType[]>(STORAGE_KEY) || [],
  setFavorites: (data: FavoriteType[]) => {
    storage.set(STORAGE_KEY, data);
    set({ favorites: data });
  },
  addToFavorite: (data: FavoriteType) =>
    set((state) => {
      const updated = [...state.favorites, data];
      storage.set(STORAGE_KEY, updated);
      return { favorites: updated };
    }),
  removeFromFavorite: (id: string) =>
    set((state) => {
      const updated = state.favorites.filter((s) => s.propertyId !== id);
      storage.set(STORAGE_KEY, updated);
      return { favorites: updated };
    }),
}));
