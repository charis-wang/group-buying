import { React, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Grid, Box, Link } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderMenu from "../components/order/join/OrderMenu";
import ShoppingCart from "../components/order/join/ShoppingCart";
import NotFoundPage from "./NotFoundPage";
import { FetchOrder } from "../actions/order";
import { FetchCartItem } from "../actions/cart";

import { getDatetimeString } from "../utils/base";

const OrderJoin = (props) => {
  const orderId = useParams().id;
  const orderInfo = useSelector((state) => state.order);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    props.FetchOrder(orderId).catch(() => setNotFound(true));
    props.FetchCartItem(orderId).catch(() => setNotFound(true));
  }, []);

  if (notFound) return <NotFoundPage />;

  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="Join Order Now!" />
      <Grid
        container
        justifyContent="center"
        direction="row"
        spacing={2}
        my={2}
      >
        <Grid item xs={10.5} sm={8} md={8} lg={8}>
          <Box justifyContent="center" alignItems="center">
            <Link href="./" underline="hover">
              <Typography mb={2}>
                <KeyboardArrowLeftIcon />
                view order detail
              </Typography>
            </Link>

            <Typography ml={1} gutterBottom>
              OrderId: {orderInfo.orderId} <br />
              Initiator: {orderInfo.initiator} <br />
              shop: {orderInfo.shop}
            </Typography>
            <Typography ml={1} gutterBottom>
              Deadline: {getDatetimeString(orderInfo.orderDeadline)}
            </Typography>
            <br />
          </Box>
        </Grid>
        <Grid item xs={10.5} sm={8} mb={3}>
          <OrderMenu available={true} />
        </Grid>
        <Grid item xs={10} md={9} mb={3} alignItems="flex-end">
          <ShoppingCart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { FetchOrder, FetchCartItem })(OrderJoin);
