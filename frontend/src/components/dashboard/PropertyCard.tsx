import { useState } from "react";
import img from "../../assets/authPageImg.jpg";
import { properties } from "../../constants/dashboardConstant";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const PropertyCard = () => {
  const [favorites, setFavorites] = useState<String[]>([]);

  const handleSelectFavorite = (id: string) => {
    setFavorites((prev) => [...prev, id]);
  };

  return (
    <div className="flex flex-wrap gap-6">
      {properties.map((p) => (
        <div
          key={p.id}
          className="w-72 min-h-80 shadow-lg flex flex-col  p-2 rounded-2xl gap-4 hover:scale-[1.05] transition-discrete duration-300"
        >
          <div className="relative w-full">
            <img src={img} className="w-full h-40 object-cover rounded-2xl" />
            <div onClick={() => handleSelectFavorite(p.id)}>
              {favorites.includes(p.id) ? (
                <FaHeart
                  size={22}
                  className="absolute top-2  right-4 text-blue-500"
                />
              ) : (
                <CiHeart
                  size={22}
                  className="absolute top-2  right-4 text-white"
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
