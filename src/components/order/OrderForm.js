import React, { useState } from "react";
import { Box, TextField, Button, Grid, MenuItem } from "@mui/material";

import OrderDateTimePicker from "./OrderDateTimePicker";

const shopOptions = [
  {
    value: "MOS",
    label: "摩斯",
  },
  {
    value: "KFC",
    label: "肯德基",
  },
];

export default function OrderForm() {
  const [state, setState] = useState({
    orderDatetime: "",
    initiator: "",
    shop: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "orderDatetime") setState({ ...state, orderDatetime: value });
    if (name === "initiator") setState({ ...state, initiator: value });
    if (name === "shop") setState({ ...state, shop: value });
  };

  const submitHandler = (formValues) => {
    formValues.preventDefault();
    console.log("onSubmit", state);
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={submitHandler}
      mt={5}
      mx={0}
    >
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item xs={12} md="auto">
          <TextField
            id="outlined-name"
            label="Initiator"
            name="initiator"
            value={state.initiator}
            onChange={handleChange}
            error={!state.initiator}
            InputProps={{ inputProps: { minLength: 1, maxLength: 10 } }}
            required
            sx={{ width: "15em" }}
          />
        </Grid>

        <Grid item xs={12} md="auto">
          <TextField
            name="shop"
            select
            label="Select Shop"
            value={state.shop}
            onChange={handleChange}
            error={!state.shop}
            required
            sx={{ width: "15em" }}
          >
            {shopOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md="auto">
          <OrderDateTimePicker
            name="orderDatetime"
            value={state.orderDatetime}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md="auto">
          <Button
            sx={{
              width: "16em",
              p: 1.5,
              bgcolor: "#ABC270",
              ":hover": { bgcolor: "#4E6C50" },
            }}
            type="submit"
            size="large"
            variant="contained"
          >
            create order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
