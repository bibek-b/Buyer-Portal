import { usePropertyStore } from "../../stores/propertyStore";
import { useUserStore } from "../../stores/userStore";
import PropertyCard from "./PropertyCard";

const DashboardHome = () => {
   const { properties } = usePropertyStore();

   const { user } = useUserStore();

  return (
    <div className="py-4 space-y-20">
      <h2 className="text-4xl font-bold capitalize">Welcome 👋, {user.name} ({user.role})</h2>

      <span className=" absolute left-1/2 top-25 text-lg">
        List of available properties 🏘
      </span>

      <PropertyCard data={properties} />
    </div>
  );
};

export default DashboardHome;
