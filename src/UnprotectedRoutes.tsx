import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "./helpers/validateToken";

export const UnprotectedRoutes = () => {
    const isAuthenticated = validateToken();

    return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
}