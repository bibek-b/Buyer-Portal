import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../components/dashboard/DashboardHome";
import MyFavorites from "../pages/MyFavorites";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/:mode" element={<Auth />} />
        <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="/myFavorites" element={<MyFavorites />} />
        </Route>
        </Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
