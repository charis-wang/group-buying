import { React, useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";

import { connect } from "react-redux";
import { CreateShop, CreateMenu } from "../actions";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import ShopForm from "../components/menu/ShopForm";
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";

import { postShop } from "../apis/shop";
import { store } from "../store";

const MenuCreate = (props) => {
  const [state, setState] = useState({
    formValues: null,
    formValuesOfShop: {},
    display: "shop",
  });

  const onSubmitOfMenuTableRow = (value) => {
    props.CreateMenu(value);

    setState({
      ...state,
      formValues: value,
    });
  };

  const onSubmitOfShop = (value) => {
    props.CreateShop(value);

    setState({
      ...state,
      formValuesOfShop: value,
      display: "menu",
    });
  };

  const save = () => {
    const stateOfMenu = store.getState().menu;
    const sendData = { shop: state.formValuesOfShop, menu: stateOfMenu };

    postShop(sendData).then((res) => {
      window.location.href = `/menu/${res.data.id}`;
      window.history.replaceState(null, "", "/");
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
            onSubmit={onSubmitOfShop}
            display={state.display}
            buttonName={"next step"}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography m={1} variant="h6" gutterBottom align="center">
            Create Menu
          </Typography>

          <MenuTableForm
            onSubmit={onSubmitOfMenuTableRow}
            display={state.display}
          />
          <MenuTable value={state.formValues} />
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography align="center">
            <Button
              size="large"
              variant="contained"
              color="success"
              disabled={state.display !== "menu"}
              onClick={save}
            >
              Save
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { CreateShop, CreateMenu })(MenuCreate);
