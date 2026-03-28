import { useEffect } from "react";
import LeftSidebar from "../components/dashboard/LeftSidebar";
import { properties } from "../constants/dashboardConstant";
import { Outlet } from "react-router";
import { storage } from "../utils/storage";

const Dashboard = () => {
  useEffect(() => {
    storage.set("properties", properties);
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
