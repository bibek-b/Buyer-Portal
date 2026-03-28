import LeftSidebar from "../components/dashboard/LeftSidebar";
import { Outlet } from "react-router";

const Dashboard = () => {

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
