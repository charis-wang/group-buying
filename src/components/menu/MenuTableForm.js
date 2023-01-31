import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const MenuTableForm = (props) => {
  const [state, setState] = useState({
    groupName: "",
    itemName: "",
    price: "",
    detail: "",
  });

  const onSubmit = (formValues) => {
    formValues.preventDefault();
    props.onSubmit(state);
    setState({
      groupName: "",
      itemName: "",
      price: "",
      detail: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        "& > :not(style)": { m: 1 },
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        name="groupName"
        label="Group Name"
        variant="standard"
        onChange={handleChange}
        required
        sx={{ width: "11ch" }}
        value={state.groupName}
      />
      <TextField
        name="itemName"
        label="ItemName"
        variant="standard"
        onChange={handleChange}
        required
        value={state.itemName}
      />
      <TextField
        name="price"
        type="number"
        inputProps={{
          min: "0",
        }}
        label="Price"
        variant="standard"
        onChange={handleChange}
        required
        sx={{ width: "8ch" }}
        value={state.price}
      />
      <TextField
        name="detail"
        label="Detail"
        variant="standard"
        onChange={handleChange}
        required
        sx={{ width: "11ch" }}
        value={state.detail}
      />
      <IconButton type="submit" variant="outlined">
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default MenuTableForm;
