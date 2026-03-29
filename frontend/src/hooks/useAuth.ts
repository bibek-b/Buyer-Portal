import { toast } from "react-toastify";
import { authApi } from "../api/authApi";
import { useUserStore } from "../stores/userStore";
import type { AxiosError } from "axios";
import { navigator } from "../utils/navigate";
import { useFavoriteStore } from "../stores/favoritesStore";
import type { AuthFormDataType } from "../types/authType";
import { useLoaderStore } from "../stores/loaderStore";

export const useAuth = () => {
  const { setUser } = useUserStore();
  const { setFavorites } = useFavoriteStore();
  const { navigate } = navigator();
  const { showLoading, hideLoading } = useLoaderStore();

  const logout = async () => {
    try {
      showLoading();
      const res = await authApi.logout();
      setUser(null);
      setFavorites(null);
      toast.success(res.data.message);
      navigate("/auth/login");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      hideLoading();
    }
  };

  const register = async (data: AuthFormDataType) => {
    try {
      showLoading();
      const res = await authApi.register(data);
      setUser(res?.data.data);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      hideLoading();
    }
  };

  const login = async (data: AuthFormDataType) => {
    try {
      showLoading();
      const res = await authApi.login(data);
      setUser(res?.data.data);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      hideLoading();
    }
  };

  return { logout, register, login };
};
