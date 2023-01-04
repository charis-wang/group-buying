import React from "react";
//import { connect } from 'react-redux'
import { Typography, Button, Grid, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderForm from "../components/order/OrderForm";

class OrderCreate extends React.Component {
  render() {
    return (
      <Box>
        <Navbar />
        <BackgroundImagePage />
        <Grid container>
          <Grid item xs={12}>
            <Typography
              pb={1.5}
              m={1.5}
              align="center"
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontStyle: "Italic",
                color: "darkseagreen",
              }}
            >
              Create New Order
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <OrderForm />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default OrderCreate;
