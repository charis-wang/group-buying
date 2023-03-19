import { React, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Grid, Box, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderMenu from "../components/order/join/OrderMenu";
import NotFoundPage from "./NotFoundPage";
import { FetchShop } from "../actions/shop";
import { FetchMenu } from "../actions/menu";

const MenuList = (props) => {
  const shopId = useParams().id;
  const shopInfo = useSelector((state) => state.shop);
  const [notFound, setNotFound] = useState(false);
  //initialization (from api)
  useEffect(() => {
    props.FetchShop(shopId).catch(() => setNotFound(true));
    props.FetchMenu(shopId).catch(() => setNotFound(true));
  }, []);

  if (notFound) return <NotFoundPage />;

  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="Menu" />
      <Grid
        container
        justifyContent="center"
        direction="row"
        spacing={2}
        my={2}
      >
        <Grid item xs={10.5} sm={8} md={8} lg={8}>
          <Box justifyContent="center" alignItems="center">
            <Typography gutterBottom>shop: {shopInfo.shopName}</Typography>

            <Typography gutterBottom>type: {shopInfo.shopType}</Typography>

            <Typography gutterBottom>
              Phone Number: {shopInfo.shopPhoneNumber}
            </Typography>
            <Typography gutterBottom>
              address: {shopInfo.shopAddress}
            </Typography>
            <Typography gutterBottom>info: {shopInfo.shopInfo}</Typography>
          </Box>
        </Grid>
        <Grid item xs={10.5} sm={8} mb={3}>
          <OrderMenu available={false} />
        </Grid>
        <Grid item xs={10} md={9} mb={3} alignItems="flex-end">
          <Fab variant="edit" href={`/menu/${shopId}/edit`}>
            <EditIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { FetchShop, FetchMenu })(MenuList);
