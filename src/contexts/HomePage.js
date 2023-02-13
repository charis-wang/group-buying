import React from "react";
import { Grid, Box } from "@mui/material";

import "../components/index.css";
import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import Sidebar from "../components/Sidebar";
import MenuGallery from "../components/MenuGallery";

const HomePage = () => {
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
      <Grid item xs={12} mb={5}>
        <BackgroundImagePage title="Home" />
      </Grid>

      <Box
        component={Grid}
        item
        sm={3}
        md={2}
        display={{ xs: "none", sm: "flex", md: "flex" }}
      >
        <Sidebar />
      </Box>
      <Grid item xs={12} sm={9} md={10}>
        <MenuGallery />
      </Grid>
    </Grid>
  );
};

export default HomePage;
