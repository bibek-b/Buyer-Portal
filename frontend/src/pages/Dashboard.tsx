import { useEffect } from "react";
import LeftSidebar from "../components/dashboard/LeftSidebar";
import PropertyCard from "../components/dashboard/PropertyCard";
import { properties } from "../constants/dashboardConstant";

const Dashboard = () => {
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, []);

  return (
    <div className="min-h-full flex ">
      <div className="w-[40%]">
        <LeftSidebar />
      </div>

      <div className="py-4 space-y-8">
        <h2 className="text-4xl font-bold">Welcome, Bibek (Buyer)</h2>

        <PropertyCard />
      </div>
    </div>
  );
};

export default Dashboard;
