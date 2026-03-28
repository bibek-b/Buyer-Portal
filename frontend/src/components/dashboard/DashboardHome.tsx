import { useEffect } from "react";
import { usePropertyStore } from "../../stores/propertyStore";
import { useUserStore } from "../../stores/userStore";
import PropertyCard from "./PropertyCard";
import { toast } from "react-toastify";
import { propertyApi } from "../../api/propertyApi";
import type { AxiosError } from "axios";

const DashboardHome = () => {
  const { properties, setProperties } = usePropertyStore();

  useEffect(() => {
    const fetchAllProperties = async () => {
      try {
        const res = await propertyApi.getAllProperties();
        setProperties(res.data.data);
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    };
    fetchAllProperties();
  }, []);

  const { user } = useUserStore();

  return (
    <div className="py-4 space-y-20">
      <h2 className="text-4xl font-bold capitalize">
        👋Welcome, {user.name} ({user.role})
      </h2>

      <span className=" absolute left-1/2 top-25 text-lg">
        List of available properties 🏘
      </span>

      <PropertyCard data={properties} />
    </div>
  );
};

export default DashboardHome;
