import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Button, Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import ShopForm from "../components/menu/ShopForm";
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";
import { FetchShop, SaveShopAndMenu, DeleteShopAndMenu } from "../actions/shop";
import { FetchMenu } from "../actions/menu";

const MenuEdit = (props) => {
  const shopId = useParams().id;

  const [display, setDisplay] = useState("shop");

  const saveShop = () => {
    props.SaveShopAndMenu().then(() => {
      window.location.href = `/menu/${shopId}`;
    });
  };

  const deleteShop = () => {
    props.DeleteShopAndMenu(shopId);
  };

  // initial (from api)
  useEffect(() => {
    props.FetchShop(shopId);
    props.FetchMenu(shopId);
  }, []);

  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="Edit Menu" />
      <Grid
        container
        spacing={2}
        p={2}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item xs={12} md={3}>
          <Typography
            my={1.5}
            mx={0.5}
            variant="h6"
            gutterBottom
            align="center"
          >
            Edit Shop
          </Typography>
          <ShopForm setDisplay={setDisplay} display={display} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography m={1} variant="h6" gutterBottom align="center">
            Edit Menu
          </Typography>

          <MenuTableForm display={display} />
          <MenuTable />
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography align="center">
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="success"
              disabled={display !== "menu"}
              onClick={saveShop}
            >
              Save
            </Button>
            <span> </span>
            <Button
              type="button"
              size="large"
              variant="contained"
              color="error"
              onClick={deleteShop}
            >
              Delete
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({ menu: state.menu });

export default connect(mapStateToProps, {
  FetchShop,
  FetchMenu,
  SaveShopAndMenu,
  DeleteShopAndMenu,
})(MenuEdit);
