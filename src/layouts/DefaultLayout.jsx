import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Header from "../components/Header";

const DefaultLayout = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
