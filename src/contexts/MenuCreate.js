import React, { Fragment } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";

import { connect } from "react-redux";
import { CreateShop, CreateMenu } from "../actions";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import ShopForm from "../components/menu/ShopForm";
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";

class MenuCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: null,
      formValuesOfShop: { shopName: "Shop" },
      displayMenu: true,
    };
  }

  onSubmit = (value) => {
    this.props.CreateMenu(value);

    this.setState({
      formValues: value,
    });
  };

  onSubmitOfShop = (value) => {
    this.props.CreateShop(value);

    this.setState({
      formValuesOfShop: value,
      displayMenu: true,
    });
  };

  render() {
    return (
      <Box>
        <Navbar />
        <BackgroundImagePage />
        <Grid
          container
          spacing={2}
          p={2}
          alignItems="flex-start"
          justifyContent="center"
        >
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
              Create New Menu
            </Typography>
          </Grid>

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
            <ShopForm onSubmit={this.onSubmitOfShop} buttonName={"Add Shop"} />
          </Grid>

          {this.state.displayMenu ? (
            <Fragment>
              <Grid item xs={12} md={9}>
                <Typography m={1} variant="h6" gutterBottom align="center">
                  Create Menu of {this.state.formValuesOfShop.shopName}
                </Typography>

                <MenuTableForm onSubmit={this.onSubmit} />
                <MenuTable value={this.state.formValues} />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography align="center">
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="success"
                  >
                    Save
                  </Button>
                </Typography>
              </Grid>
            </Fragment>
          ) : null}
        </Grid>
      </Box>
    );
  }
}

export default connect(null, { CreateShop, CreateMenu })(MenuCreate);
