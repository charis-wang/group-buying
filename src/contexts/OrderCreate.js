import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderForm from "../components/order/OrderForm";

class OrderCreate extends React.Component {
  render() {
    return (
      <Box>
        <Navbar />
        <BackgroundImagePage title="Create New Order" />
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <OrderForm />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default OrderCreate;
