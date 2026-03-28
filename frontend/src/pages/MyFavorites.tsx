import PropertyCard from "../components/dashboard/PropertyCard";
import { useFavoriteStore } from "../stores/favoritesStore";
import { usePropertyStore } from "../stores/propertyStore";

const MyFavorites = () => {
  const { favorites } = useFavoriteStore();
  const { properties } = usePropertyStore();

  const favoritePropertiesDetails = properties.filter((p) =>
    favorites.some((f) => f.id === p.id),
  );
  return (
    <div className="space-y-4 py-4">
      <h3 className="text-2xl font-semibold">Your Favorites ❤️</h3>

      <PropertyCard data={favoritePropertiesDetails} />
    </div>
  );
};

export default MyFavorites;
