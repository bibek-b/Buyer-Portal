import { create } from "zustand";
import type { PropertyType, PropertyStoreType } from "../types/propertyType";
import { storage } from "../utils/storage";

const STORAGE_KEY="properties";

export const usePropertyStore = create<PropertyStoreType>(set => ({
    properties: storage.get<PropertyType[]>(STORAGE_KEY) || [],
    setProperties: (data: PropertyType[]) => {
        storage.set(STORAGE_KEY, data);
        set({properties: data})
    }
}))