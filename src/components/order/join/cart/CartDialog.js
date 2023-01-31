import { React, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { CartItem } from "./CartItem";

export const CartDialog = (props) => {
  const { open } = props;
  const [cartValues, setCartValues] = useState([]);
  const [disable, setDisable] = useState(true);

  const handleClose = () => open.set(false);

  const updateAmount = (id, delta) => {
    const amount = cartValues[id].amount;
    const item = { ...cartValues[id], amount: amount + delta };
    const newCartValues = { ...cartValues, [id]: item };
    if (item.amount === 0) delete newCartValues[id];
    setCartValues(newCartValues);
  };

  const onSubmit = (e) => {
    props.onSubmit(cartValues);
    e.preventDefault();
  };

  useEffect(() => {
    setCartValues(props.cartValues);
  }, [props.cartValues]);

  return (
    <Dialog
      open={open.get()}
      keepMounted
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(255,255,255,0.2)" }}
      onSubmit={onSubmit}
      component="form"
    >
      <DialogTitle>Your Cart List of Dixon's group buying</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Check your cart list and submit!
          <br />
        </DialogContentText>
        <br />
        {Object.values(cartValues).map((item) => (
          <CartItem item={item} key={item.id} updateAmount={updateAmount} />
        ))}
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          disabled={Object.values(cartValues).length ? false : true}
        >
          Save
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
