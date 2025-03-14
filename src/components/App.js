import { React, useEffect, useState, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

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
import NotFoundPage from "../contexts/NotFoundPage";
import MyOrder from "../contexts/MyOrder";

const LoginRequiredRoute = (props) => {
  const status = useSelector((state) => state.account.login);
  if (status === true) return props.component;
  else if (status === false) return <LoginPage />;
};

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
    path: "/myorder",
    element: <LoginRequiredRoute component={<MyOrder />} />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);


const AppProvider = (props) => {
  const themeMode = useSelector((state) => state.themeMode.themeMode);

  const theme = useMemo(() => createTheme(themeOption(themeMode)), [themeMode]);

  useEffect(() => {
    props.getInfo();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Notification />
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default connect(null, { getInfo })(AppProvider);
