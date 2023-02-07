import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../contexts/HomePage";
import MenuCreate from "../contexts/MenuCreate";
import MenuEdit from "../contexts/MenuEdit";
import OrderCreate from "../contexts/OrderCreate";
import OrderJoin from "../contexts/OrderJoin";
import OrderList from "../contexts/OrderList";
import LoginPage from "../contexts/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "menu/new",
    element: <MenuCreate />,
  },
  {
    path: "/menu/:id/edit",
    element: <MenuEdit />,
  },
  {
    path: "/order/create",
    element: <OrderCreate />,
  },
  { path: "/order/:id/join", element: <OrderJoin /> },
  {
    path: "/order/:id",
    element: <OrderList />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const AppProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppProvider;
