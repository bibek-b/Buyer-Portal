import img from "../../assets/authPageImg.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useFavoriteStore } from "../../stores/favoritesStore";
import type { FavoriteType } from "../../types/favoriteType";
import type { PropertyType } from "../../types/propertyType";
import { useUserStore } from "../../stores/userStore";
import { toast } from "react-toastify";
import { favoriteApi } from "../../api/favoriteApi";
import type { AxiosError } from "axios";
import { useLoaderStore } from "../../stores/loaderStore";

const PropertyCard = ({ data }: { data: PropertyType[] }) => {
  const { addToFavorite, favorites, removeFromFavorite } = useFavoriteStore();
  const { user } = useUserStore();
  const { showLoading, hideLoading } = useLoaderStore();

  const handleSelectFavorite = async (id: string) => {
    let res;
    try {
      showLoading();
      if (favorites?.some((fav: FavoriteType) => fav.propertyId === id)) {
        removeFromFavorite(id);
        res = await favoriteApi.removeFromFavorites(id);
      } else {
        addToFavorite({ propertyId: id, userId: user?._id! });
        res = await favoriteApi.addToFavorites(id);
      }
      toast.success(res.data.message);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      hideLoading();
    }
  };

  return (
    <div className="flex flex-wrap gap-6">
      {data.length > 0 ? (
        data?.map((p) => (
          <div
            key={p._id}
            className="w-72 min-h-80 shadow-xl shadow-indigo-500 flex flex-col  p-2 rounded-2xl gap-4 hover:scale-[1.05] transition-discrete duration-300"
          >
            <div className="relative w-full">
              <img src={img} className="w-full h-40 object-cover rounded-2xl" />
              <div onClick={() => handleSelectFavorite(p._id)}>
                {favorites?.some(
                  (fav: FavoriteType) => fav.propertyId == p._id,
                ) ? (
                  <FaHeart
                    size={22}
                    className="absolute top-2  right-4 text-blue-500 cursor-pointer hover:scale-[1.2] transition-discrete duration-300 ease-in-out"
                  />
                ) : (
                  <CiHeart
                    size={22}
                    className="absolute top-2  right-4 text-white cursor-pointer hover:scale-[1.2] "
                  />
                )}
              </div>
            </div>

            <div className="space-y-2 text-black/80 flex flex-col  justify-center h-full">
              <span className="text-xl font-semibold line-clamp-2">
                Rs.{p.price}
              </span>
              <h3 className="font-medium text-2xl">{p.title}</h3>

              <span className="italic">{p.location}</span>
            </div>
          </div>
        ))
      ) : (
        <span className="absolute top-1/2 left-1/2 text-xl">No data found</span>
      )}
    </div>
  );
};

export default PropertyCard;
