import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const MenuTableForm = (props) => {
  const [state, setState] = useState({
    item: "",
    unit: "",
    price: "",
  });

  const onSubmit = (formValues) => {
    formValues.preventDefault();
    console.log("onSubmit", state);
    props.onSubmit(state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const required = (value) => (value ? undefined : "Required");

  const renderError = ({ error, touched }) => {
    // console.log({ error, touched })
    if (touched && error) {
      return <span className="text-danger">{error}</span>;
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <br />
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        "& > :not(style)": { m: 1, width: "15ch" },
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        name="item"
        label="Item"
        variant="outlined"
        onChange={handleChange}
        required
      />
      <TextField
        name="unit"
        label="Unit"
        variant="outlined"
        onChange={handleChange}
        required
      />
      <TextField
        name="price"
        type="number"
        inputProps={{
          min: "0",
        }}
        label="Price"
        variant="outlined"
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="outlined">
        Add Item
      </Button>
    </Box>
  );
};

export default MenuTableForm;
