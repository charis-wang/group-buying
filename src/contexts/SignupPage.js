import { React } from "react";
import { Grid } from "@mui/material";

import "../components/index.css";
import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
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
        <BackgroundImagePage title="Sign up" />
      </Grid>
      <Grid item xs={12}>
        <SignupForm />
      </Grid>
    </Grid>
  );
};

export default SignupPage;
