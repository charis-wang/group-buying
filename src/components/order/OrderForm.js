import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

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
    initiator: "Charis",
    shop: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "initiator") setState({ ...state, initiator: value });
    if (name === "shop") setState({ ...state, shop: value });
    //console.log('onChange:', state)
  };

  const submitHandler = (formValues) => {
    console.log("submit called");
    formValues.preventDefault();
    console.log("onSubmit", state);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, minWidth: "15ch", minHeight: "7ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <OrderDateTimePicker />

      <TextField
        id="outlined-name"
        label="Initiator"
        name="initiator"
        value={state.initiator}
        onChange={handleChange}
        helperText="Please enter the username of initiator"
      />

      <TextField
        id="outlined-select-currency-native"
        name="shop"
        select
        label="Select Shop"
        defaultValue="KFC"
        SelectProps={{
          native: true,
        }}
        helperText="Please select a shop"
        onChange={handleChange}
      >
        {shopOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <Button
        type="submit"
        size="medium"
        variant="contained"
        onClick={() => {
          console.log("click button");
        }}
      >
        create order form
      </Button>
    </Box>
  );
}
