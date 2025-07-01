import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const AuthLayout = () => {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>AuthLayout {token}</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
