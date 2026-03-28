import { create } from "zustand";
import type { LoaderStoreType } from "../types/loaderType";

export const useLoaderStore = create<LoaderStoreType>((set) => ({
  isLoading: false,
  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),
}));
