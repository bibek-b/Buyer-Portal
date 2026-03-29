import { create } from "zustand";
import type { UserStoreType, UserType } from "../types/userType";
import { storage } from "../utils/storage";

const STORAGE_KEY = "user";
export const useUserStore = create<UserStoreType>((set) => ({
  user: storage.get(STORAGE_KEY) || { _id: "", name: "", email: "", role: "" },
  setUser: (data: UserType | null) => {
    if (data) {
      storage.set(STORAGE_KEY, data);
    } else {
      storage.remove(STORAGE_KEY);
    }
    set({ user: data });
  },
}));
