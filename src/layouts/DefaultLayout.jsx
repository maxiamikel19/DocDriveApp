import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const DefaultLayout = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>DefaultLayout</h1>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
