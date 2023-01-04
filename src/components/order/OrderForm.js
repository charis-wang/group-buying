import React, { useState } from "react";
import { Box, TextField, Button, Grid } from "@mui/material";

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
    if (name === "orderDatetime") setState({ ...state, initiator: value });
    if (name === "initiator") setState({ ...state, initiator: value });
    if (name === "shop") setState({ ...state, shop: value });
  };

  const submitHandler = (formValues) => {
    //console.log("submit called");
    formValues.preventDefault();
    console.log("onSubmit", state);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          ml: 5,
          py: 2,
        },
      }}
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100%", maxWidth: "100%" }}
      >
        <Grid item xs={12} md="auto">
          <OrderDateTimePicker
            name="orderDatetime"
            value={state.orderDatetime}
            onChange-={handleChange}
          />
        </Grid>
        <Grid item xs={12} md="auto">
          <TextField
            id="outlined-name"
            label="Initiator"
            name="initiator"
            value={state.initiator}
            onChange={handleChange}
            error={!state.initiator}
            required
          />
        </Grid>
        <Grid item xs={12} md="auto">
          <TextField
            name="shop"
            select
            label="Select Shop"
            SelectProps={{
              native: true,
            }}
            onChange={handleChange}
            error={!state.shop}
            required
          >
            {shopOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md="auto">
          <Button
            sx={{ minHeight: "6.5ch" }}
            type="submit"
            size="large"
            variant="contained"
          >
            create order form
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
