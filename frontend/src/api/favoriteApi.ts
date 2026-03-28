import api from "./axios";

export const favoriteApi = {
  getMyFavorites: () => api.get("/favorites/my"),
  addToFavorites: (id: string) => api.post(`/favorites/${id}`),
  removeFromFavorites: (id: string) => api.delete(`/favorites/${id}`),
};
