import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../contexts/HomePage";
import MenuCreate from "../contexts/MenuCreate";
import CreateMenu from "../contexts/MenuCreate";
import MenuEdit from "../contexts/MenuEdit";
import OrderCreate from "../contexts/OrderCreate";

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
    path: "/order/new",
    element: <OrderCreate />,
  },
  {
    path: "/menu/:id/edit",
    element: <MenuEdit />,
  },
]);

const AppProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppProvider;
