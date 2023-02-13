import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, TextField, IconButton, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { CreateMenu } from "../../actions/menu";

const initialState = {
  groupName: "",
  itemName: "",
  price: "",
  detail: "",
};

const MenuTableForm = (props) => {
  const [state, setState] = useState({ ...initialState });
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => setReadOnly(props.display !== "menu"), [props.display]);

  const onSubmit = (e) => {
    props.CreateMenu(state);
    setState({ ...initialState });
    e.preventDefault();
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
        textAlign: "center",
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 0.5, md: 1 }}
      >
        <Grid item xs={12} sm={5} md={2}>
          <TextField
            name="groupName"
            label="Group Name"
            variant="standard"
            onChange={handleChange}
            required
            sx={{ width: "11ch" }}
            value={state.groupName}
            disabled={readOnly}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <TextField
            name="itemName"
            label="ItemName"
            variant="standard"
            onChange={handleChange}
            required
            sx={{ width: "11ch" }}
            value={state.itemName}
            disabled={readOnly}
          />
        </Grid>

        <Grid item xs={12} sm={5} md={2}>
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
            sx={{ width: "11ch" }}
            value={state.price}
            disabled={readOnly}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={2}>
          <TextField
            name="detail"
            label="Detail"
            variant="standard"
            onChange={handleChange}
            required
            sx={{ width: "11ch" }}
            value={state.detail}
            disabled={readOnly}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
          <IconButton type="submit" variant="outlined" disabled={readOnly}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { CreateMenu })(MenuTableForm);
