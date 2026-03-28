import axios from "axios";
import { env } from "../config/env";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: env.serverUrl,
    withCredentials: true
});

api.interceptors.response.use(response => response, (error) => {
    if(error.response.status === 401){
        toast.error(error.response.data.message);

        window.location.href ="/auth/login"
    }
    return Promise.reject(error);
} )




export default api;