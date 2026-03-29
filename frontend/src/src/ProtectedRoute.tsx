import { Navigate, Outlet } from "react-router";
import { useUserStore } from "../stores/userStore";

const ProtectedRoute = () => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to={"/auth/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
