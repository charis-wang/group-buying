import { React, useState } from "react";
import { connect } from "react-redux";
import { Typography, Button, Grid, Box } from "@mui/material";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import ShopForm from "../components/menu/ShopForm";
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";
import { SaveShopAndMenu } from "../actions/shop";

const MenuCreate = (props) => {
  const [display, setDisplay] = useState("shop");
  const saveShop = () => {
    props.SaveShopAndMenu().then((res) => {
      const shopId = res.data.id;
      window.location.href = `/menu/${shopId}`;
    });
  };
  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="Create New Menu" />
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
            Create Shop
          </Typography>
          <ShopForm
            display={display}
            setDisplay={setDisplay}
            buttonName={"next step"}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography m={1} variant="h6" gutterBottom align="center">
            Create Menu
          </Typography>

          <MenuTableForm display={display} />
          <MenuTable />
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography align="center">
            <Button
              size="large"
              variant="contained"
              color="success"
              disabled={display !== "menu"}
              onClick={saveShop}
            >
              Save
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, {
  SaveShopAndMenu,
})(MenuCreate);
