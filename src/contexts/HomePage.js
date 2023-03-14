import React, { useState } from "react";
import { Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import Sidebar from "../components/Sidebar";
import MenuGallery from "../components/menu-gallery/MenuGallery";

const HomePage = () => {
  const [selectedType, setSelectedType] = useState();
  const selectOne = (value) => {
    setSelectedType(value);
  };
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
        <Sidebar select={selectOne} />
      </Box>
      <Grid item xs={12} sm={9} md={10}>
        <MenuGallery selected={selectedType} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
