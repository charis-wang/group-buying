import { React } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  const login = useSelector((state) => state.account.login);

  if (login) window.history.back();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <BackgroundImagePage title="Log in" />
      </Grid>
      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
