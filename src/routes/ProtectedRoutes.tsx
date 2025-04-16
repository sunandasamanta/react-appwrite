import { Navigate, Outlet } from "react-router-dom";

// import { useAuth } from "../context/AuthContext"

const ProtectedRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  // const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
