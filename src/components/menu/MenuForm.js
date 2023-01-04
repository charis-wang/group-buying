import React, { useState } from "react";
//import { render } from 'react-dom'
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";
import { getByDisplayValue } from "@testing-library/react";

const shopTypes = [
  {
    value: "Drinks",
    label: "Drinks",
  },
  {
    value: "Lunch",
    label: "Lunch",
  },
  {
    value: "Dessert",
    label: "Dessert",
  },
];

const MenuForm = (props) => {
  const [state, setState] = useState({
    shopName: "",
    shopType: "",
    shopPhoneNumber: "",
    shopAddress: "",
    shopInfo: "",
  });

  const onSubmit = (formValues) => {
    formValues.preventDefault();
    console.log("onSubmit", state);
    props.onSubmit(state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ ...state, [name]: value });
    setState({ ...state, [name]: value });
  };

  const validateForm = (state) => {
    if (!state.shopName) {
      return <span>unvalid</span>;
    }
  };

  const required = (value) => (value ? undefined : "Required");

  const renderError = ({ error, touched }) => {
    // console.log({ error, touched })
    if (touched && error) {
      return <span className="text-danger">{error}</span>;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { minWidth: "20ch" },
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="shopName"
            label="Shop Name"
            variant="outlined"
            onChange={handleChange}
            required
            error={!state.shopName}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="shopType"
            select
            label="Select Type of Shop"
            onChange={handleChange}
            error={!state.shopType}
            value={state.shopType}
            required
            style={{ minWidth: "19.5ch" }}
          >
            {shopTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="tel"
            name="shopPhoneNumber"
            label="Phone Number"
            variant="outlined"
            onChange={handleChange}
            error={!state.shopPhoneNumber.match(/^0[0-9]{1}-[0-9]{7,8}$/)}
            placeholder="02-12345678"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="shopAddress"
            label="Address"
            variant="outlined"
            onChange={handleChange}
            error={!state.shopAddress}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="shopInfo"
            label="Info"
            variant="outlined"
            placeholder="other info"
            multiline
            rows={3}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} mx={5}>
          <Button type="submit" variant="outlined">
            Add Shop
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuForm;
