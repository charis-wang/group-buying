import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  const login = useSelector((state) => state.account.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (login) navigate("/");
  });

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
