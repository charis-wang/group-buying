import { React, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { connect } from "react-redux";
import { SnackbarProvider } from "notistack";

import HomePage from "../contexts/HomePage";
import MenuCreate from "../contexts/MenuCreate";
import MenuEdit from "../contexts/MenuEdit";
import OrderCreate from "../contexts/OrderCreate";
import OrderJoin from "../contexts/OrderJoin";
import OrderList from "../contexts/OrderList";
import LoginPage from "../contexts/LoginPage";
import SignupPage from "../contexts/SignupPage";
import { getInfo } from "../actions/account";
import { Notification } from "./Notification";

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
    path: "/menu/:id",
    element: "",
  },
  {
    path: "/order/new",
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
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

const AppProvider = (props) => {
  useEffect(() => {
    props.getInfo();
  }, []);
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <Notification />
      <RouterProvider router={router} />
    </SnackbarProvider>
  );
};

export default connect(null, { getInfo })(AppProvider);
