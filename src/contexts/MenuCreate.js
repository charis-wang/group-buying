import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
//import { connect } from 'react-redux'
import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import MenuForm from "../components/menu/MenuForm";
//import { createMenu } from "../actions"
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";

class MenuCreate extends React.Component {
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
    //console.log(this.state.formValuesOfShop)
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
              Create New Menu
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography my={1.5} mx={0.5} variant="h6" gutterBottom>
              Create Shop
            </Typography>
            <MenuForm onSubmit={this.onSubmitOfShop} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography m={1} variant="h6" gutterBottom>
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
        </Grid>
      </Box>
    );
  }
}

export default MenuCreate;
