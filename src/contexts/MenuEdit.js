import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
//import { connect } from 'react-redux'
import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import MenuForm from "../components/menu/ShopForm";
//import { createMenu } from "../actions"
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";

class MenuEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: null,
      formValuesOfShop: { shopName: "ShopName" },
    };
  }

  onSubmit = (value) => {
    this.setState({
      formValues: value,
    });
  };

  onSubmitOfShop = (value) => {
    this.setState({
      formValuesOfShop: value,
    });
  };

  render() {
    return (
      <Box>
        <Navbar />
        <BackgroundImagePage />
        <Grid container spacing={2} mx={2} p={2}>
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
              Edit Menu of {this.state.formValuesOfShop.shopName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography my={1.5} mx={0.5} variant="h6" gutterBottom>
              Edit Shop
            </Typography>
            <MenuForm onSubmit={this.onSubmitOfShop} buttonName="Edit Shop" />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography m={1} variant="h6" gutterBottom>
              Edit Menu of {this.state.formValuesOfShop.shopName}
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
              <span> </span>
              <Button
                type="button"
                size="large"
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default MenuEdit;
