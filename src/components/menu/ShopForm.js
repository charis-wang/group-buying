import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";

const shopTypes = [
  {
    value: "boxedMeal",
    label: "便當",
  },
  {
    value: "beverage",
    label: "飲料",
  },
  {
    value: "vegan",
    label: "蔬食",
  },
  {
    value: "fastFood",
    label: "速食",
  },
];

const ShopForm = (props) => {
  const [state, setState] = useState({
    shopName: "",
    shopType: "",
    shopPhoneNumber: "",
    shopAddress: "",
    shopInfo: "",
  });
  const [readOnly, setReadOnly] = useState(false);

  const onSubmit = (formValues) => {
    formValues.preventDefault();
    props.onSubmit(state);
    setReadOnly(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12}>
          <TextField
            name="shopName"
            label="Shop Name"
            variant="outlined"
            onChange={handleChange}
            required
            error={!state.shopName}
            disabled={readOnly}
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
            disabled={readOnly}
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
            disabled={readOnly}
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
            disabled={readOnly}
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
            disabled={readOnly}
          />
        </Grid>
        <Grid item xs={12} mx={5}>
          <Button type="submit" variant="outlined" disabled={readOnly}>
            {props.buttonName}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopForm;
