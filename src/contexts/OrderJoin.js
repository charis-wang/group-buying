import React from "react";
import { Typography, Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderMenu from "../components/order/join/OrderMenu";

import { orderInfo } from "../utils/mockData";
import { getDatetimeString } from "../utils/base";

class OrderJoin extends React.Component {
  render() {
    return (
      <Box>
        <Navbar />
        <BackgroundImagePage />
        <Grid container justifyContent="center" spacing={2} my={2}>
          <Grid item xs={9} md={12}>
            <Typography
              m={0}
              align="center"
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontStyle: "Italic",
                color: "darkseagreen",
              }}
              component="h4"
            >
              Join {orderInfo.initiator} Order Now!
            </Typography>
          </Grid>
          <Grid item xs={9} md={12}>
            <Typography m={0} align="center" gutterBottom>
              Deadline: {getDatetimeString(orderInfo.orderDeadlineTimestamp)}
            </Typography>
            <br />
          </Grid>
          <Grid item xs={9} md={9} mb={3}>
            <OrderMenu />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default OrderJoin;
