import { useEffect } from "react";
import LeftSidebar from "../components/dashboard/LeftSidebar";
import PropertyCard from "../components/dashboard/PropertyCard";
import { properties } from "../constants/dashboardConstant";
import { Outlet } from "react-router";

const Dashboard = () => {
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, []);

  return (
    <div className="min-h-full flex ">
      <div className="w-[40%]">
        <LeftSidebar />
      </div>

      <div>
        <Outlet />
      </div>

      
    </div>
  );
};

export default Dashboard;
