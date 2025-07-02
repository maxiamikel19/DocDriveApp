import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const AuthLayout = () => {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
