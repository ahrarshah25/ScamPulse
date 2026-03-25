import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserDataContext } from "../context/DashboardUserContext";

const RouteGuard = ({ children }) => {
  const user = useContext(UserDataContext);
  const location = useLocation();

  const path = location.pathname;
  const isUserEmpty = !user || Object.keys(user).length === 0;

  const hostname = window.location.hostname;
  const getAuthUrl = (path) => {
    if (hostname.includes("localhost")) {
      return `http://auth.localhost:5173${path}`;
    } else {
      const rootDomain = hostname.split(".").slice(-2).join(".");
      return `https://auth.${rootDomain}${path}`;
    }
  };
  if (isUserEmpty) {
    window.location.href = getAuthUrl("/login");
    return null;
  }
  if (path.startsWith("/admin") && user?.role === "user") {
    return <Navigate to="/dashboard" replace />;
  }

  if (path === "/dashboard" && user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <div key={user?._id}>{children}</div>;
};

export default RouteGuard;