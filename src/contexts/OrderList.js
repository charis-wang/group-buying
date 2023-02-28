import { React, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderListTable from "../components/order/OrderListTable";
import { FetchOrderInfo } from "../actions/order";

const OrderListItem = (props) => {
  const orderId = useParams().id;

  useEffect(() => {
    props.FetchOrderInfo(orderId);
  });

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
            <Button color="success" href={`/order/${orderId}/join`}>
              join
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { FetchOrderInfo })(OrderListItem);
