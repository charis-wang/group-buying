import { React, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import { createTheme, ThemeProvider } from "@mui/material";

import HomePage from "../contexts/HomePage";
import MenuCreate from "../contexts/MenuCreate";
import MenuEdit from "../contexts/MenuEdit";
import MenuList from "../contexts/MenuList";
import OrderCreate from "../contexts/OrderCreate";
import OrderJoin from "../contexts/OrderJoin";
import OrderList from "../contexts/OrderList";
import LoginPage from "../contexts/LoginPage";
import SignupPage from "../contexts/SignupPage";
import { getInfo } from "../actions/account";
import { Notification } from "./Notification";
import { themeOption } from "./Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/menu/new",
    element: <MenuCreate />,
  },
  {
    path: "/menu/:id/edit",
    element: <MenuEdit />,
  },
  {
    path: "/menu/:id",
    element: <MenuList />,
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

const theme = createTheme(themeOption);

const AppProvider = (props) => {
  const login = useSelector((state) => state.account.login);

  useEffect(() => {
    props.getInfo();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Notification />
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default connect(null, { getInfo })(AppProvider);
