import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserDataContext } from "../context/DashboardUserContext";

const RouteGuard = ({ children }) => {
  const user = useContext(UserDataContext);
  const localtion = useLocation();

  const path = localtion.pathname;

  if (path.startsWith("/admin") && user?.role === "user") {
    return <Navigate to="/dashboard" replace />;
  }

  if (path === "/dashboard" && user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    {children}
  )
};

export default RouteGuard;
