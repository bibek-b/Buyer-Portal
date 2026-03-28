export interface PropertyType {
    id: string;
    title: string;
    price: number;
    location: string
}

export interface PropertyStoreType {
    properties: PropertyType[];
    setProperties: (data: PropertyType[]) => void;
}