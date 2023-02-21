import { React } from "react";
import { Typography, Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderListTable from "../components/order/OrderListTable";
import { Button } from "react-bootstrap";

const OrderListItem = () => {
  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="View Order Detail" />
      <Grid justifyContent="center" container spacing={2} my={2}>
        <Grid item xs={9} md={9} mb={3}>
          <OrderListTable />
        </Grid>
        <Grid item xs={9} md={9} mb={3}>
          <Grid container justifyContent="center">
            <Button color="success">join</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderListItem;
