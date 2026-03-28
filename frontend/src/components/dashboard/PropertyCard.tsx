import img from "../../assets/authPageImg.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useFavoriteStore } from "../../stores/favoritesStore";
import type { favoriteType } from "../../types/favoriteType";
import type { PropertyType } from "../../types/propertyType";

const PropertyCard = ( { data }: { data: PropertyType[] } ) => {
  const { addToFavorite, favorites, removeFromFavorite } = useFavoriteStore();
  
  const handleSelectFavorite = (id: string) => {
    if (favorites.some((fav: favoriteType) => fav.id == id)) {
      removeFromFavorite(id);
    } else {
      addToFavorite({ id, userId: "324" });
    }
  };

  return (
    <div className="flex flex-wrap gap-6">
      {data?.map((p) => (
        <div
          key={p.id}
          className="w-72 min-h-80 shadow-lg flex flex-col  p-2 rounded-2xl gap-4 hover:scale-[1.05] transition-discrete duration-300"
        >
          <div className="relative w-full">
            <img src={img} className="w-full h-40 object-cover rounded-2xl" />
            <div onClick={() => handleSelectFavorite(p.id)}>
              {favorites.some((fav: favoriteType) => fav.id == p.id) ? (
                <FaHeart
                  size={22}
                  className="absolute top-2  right-4 text-blue-500 cursor-pointer"
                />
              ) : (
                <CiHeart
                  size={22}
                  className="absolute top-2  right-4 text-white cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="space-y-2 text-black/80 flex flex-col  justify-center">
            <span className="text-xl font-semibold ">Rs.{p.price}</span>
            <h3 className="font-medium text-2xl">{p.title}</h3>

            <span className="italic">{p.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
