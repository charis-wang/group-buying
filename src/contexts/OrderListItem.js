import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import MenuTable from "../components/menu/MenuTable";
import OrderListTable from "../components/order/OrderListTable";
import OrderListTableByPerson from "../components/order/OrderListTableByPerson";

class OrderListItem extends React.Component {
  render() {
    return (
      <Box>
        <Navbar />
        <BackgroundImagePage />
        <Grid justifyContent="center" container spacing={2} my={2}>
          <Grid item xs={12} md={12}>
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
              View Order Detail
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <OrderListTable />
            <p>-----------</p>
            <OrderListTableByPerson />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default OrderListItem;
