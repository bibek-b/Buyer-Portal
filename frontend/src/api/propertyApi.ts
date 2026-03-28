import api from "./axios";

export const propertyApi = {
  getAllProperties: () => api.get("/properties"),
};
