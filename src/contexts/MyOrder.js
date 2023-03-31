import React from "react";
import { Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderTabs from "../components/myorder/OrderTabs";

const MyOrder = () => {
  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="My Orders" />
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <OrderTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyOrder;
