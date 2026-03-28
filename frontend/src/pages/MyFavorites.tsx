import { useEffect } from "react";
import PropertyCard from "../components/dashboard/PropertyCard";
import { useFavoriteStore } from "../stores/favoritesStore";
import { usePropertyStore } from "../stores/propertyStore";
import { toast } from "react-toastify";
import { favoriteApi } from "../api/favoriteApi";
import type { AxiosError } from "axios";
import { useLoaderStore } from "../stores/loaderStore";

const MyFavorites = () => {
  const { favorites, setFavorites } = useFavoriteStore();
  const { properties } = usePropertyStore();
    const { showLoading, hideLoading } = useLoaderStore();
  

  useEffect(() => {
    const getMyFavorites = async () => {
      try {
        showLoading();
        const res = await favoriteApi.getMyFavorites();
        setFavorites(res.data.data);
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        toast.error(err.response?.data?.message || "Something went wrong");
      } finally {
        hideLoading();
      }
    };
    getMyFavorites();
  }, []);

  const favoritePropertiesDetails = properties.filter((p) =>
    favorites.some((f) => f.propertyId === p._id),
  );

  return (
    <div className="space-y-4 py-4">
      <h3 className="text-2xl font-semibold">Your Favorites ❤️</h3>

      {favorites.length > 0 ? (
        <PropertyCard data={favoritePropertiesDetails} />
      ) : (
        <span className="absolute top-1/2 left-1/2">No favourites yet ❤️</span>
      )}
    </div>
  );
};

export default MyFavorites;
