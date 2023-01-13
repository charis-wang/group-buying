import { React, useState } from "react";
import {
  MenuItem,
  ListItemText,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";

import { connect } from "react-redux";
import { AddCartItem } from "../../../actions";
import { detailTagOfDrinks } from "../../../utils/mockData";

const ItemList = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, setState] = useState({
    itemId: item.itemId,
    itemName: item.itemName,
    detail: "",
    price: item.price,
    amount: 1,
  });
  const computeAmount = (value) => {
    if (state.amount + value < 1) return;
    setState({ ...state, amount: state.amount + value });
  };
  const onSubmit = (formValues) => {
    setOpen(false);
    props.onSubmit(state);
    formValues.preventDefault();
  };

  return (
    <Box>
      <MenuItem name="itemName" onClick={handleClickOpen}>
        <ListItemText>
          {`${item.itemName} ${item.detail ? "(" + item.detail + ")" : ""}`}
        </ListItemText>

        <Typography color="text.secondary">$ {item.price}</Typography>
      </MenuItem>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        sx={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        component="form"
        onSubmit={onSubmit}
      >
        <DialogTitle>
          <Typography>
            {`${item.itemName} ${item.detail ? "(" + item.detail + ")" : ""}`}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select your sugar level and ice level below!
            <br />
          </DialogContentText>
          <br />
          <Autocomplete
            name="detail"
            options={detailTagOfDrinks.sugar}
            width="20ch"
            multiple
            renderInput={(params) => (
              <TextField
                {...params}
                label="Specific preferences"
                placeholder="Select your sugar level and ice level"
              />
            )}
            onChange={(e, newValue) => {
              setState({ ...state, detail: newValue });
            }}
          />
          <br />
          <div>
            <Button onClick={() => computeAmount(-1)}>-</Button>
            <span>{state.amount}</span>
            <Button onClick={() => computeAmount(1)}>+</Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Add To Cart</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default connect(null, { AddCartItem })(ItemList);
