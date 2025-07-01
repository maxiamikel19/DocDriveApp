import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
