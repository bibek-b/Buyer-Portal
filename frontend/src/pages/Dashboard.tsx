import LeftSidebar from "../components/dashboard/LeftSidebar";
import { Outlet } from "react-router";

const Dashboard = () => {

  return (
    <div className="min-h-full flex ">
      <div className="w-[15%]">
        <LeftSidebar />
      </div>

      <div className="w-[85%]">
        <Outlet />
      </div>

      
    </div>
  );
};

export default Dashboard;
