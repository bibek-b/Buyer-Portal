import { toast } from "react-toastify";
import { authApi } from "../api/authApi";
import { useUserStore } from "../stores/userStore";
import type { AxiosError } from "axios";
import { navigator } from "../utils/navigate";
import { useFavoriteStore } from "../stores/favoritesStore";

export const useAuth = () => {
  const { user, setUser } = useUserStore();
  const { setFavorites } = useFavoriteStore();
  const { navigate } = navigator();

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      setFavorites(null);
      navigate('/auth/login')
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return { logout }
};
