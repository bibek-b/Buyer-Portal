import type { AuthFormDataType } from "../types/authType";
import api from "./axios";

export const authApi = { 
register: (data: AuthFormDataType) => api.post('/auth/register', data),
login: (data: AuthFormDataType) => api.post('/auth/login', data),
}