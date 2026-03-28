import { useEffect } from "react";
import PropertyCard from "../components/dashboard/PropertyCard";
import { useFavoriteStore } from "../stores/favoritesStore";
import { usePropertyStore } from "../stores/propertyStore";
import { toast } from "react-toastify";
import { favoriteApi } from "../api/favoriteApi";

const MyFavorites = () => {
  const { favorites, setFavorites } = useFavoriteStore();
  const { properties } = usePropertyStore();

  useEffect(() => {
    const getMyFavorites = async () => {
      try {
        const res = await favoriteApi.getMyFavorites();
        setFavorites(res.data.data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getMyFavorites();
  }, []);

  const favoritePropertiesDetails = properties.filter((p) =>
    favorites.some((f) => f.id === p.id),
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
