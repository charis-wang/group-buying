import React from "react";
import { Grid } from "@mui/material";

import ShopCard from "./ShopCard";

const MenuGallery = (props) => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent={{ xs: "center", sm: "flex-start", md: "flex-start" }}
    >
      <ShopCard selected={props.selected} />
    </Grid>
  );
};

export default MenuGallery;
