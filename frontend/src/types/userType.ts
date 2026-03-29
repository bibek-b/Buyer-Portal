export type UserRole = "buyer" | "";

export interface UserType {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface UserStoreType {
  user: UserType | null;
  setUser: (data: UserType | null) => void;
}
