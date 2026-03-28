export type UserRole = "buyer" | "";

export interface UserType {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface UserStoreType {
  user: UserType;
  setUser: (data: UserType) => void;
}
