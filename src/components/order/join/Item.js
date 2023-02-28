import { React, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
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
  TextField,
  Box,
} from "@mui/material";

import { AddCartItem } from "../../../actions/cart";

const getInit = (orderId, item) => {
  const initValue = {
    order: orderId,
    itemId: item._id,
    itemName: item.itemName,
    orderDetail: "",
    price: item.price,
    extraCost: 0,
    amount: 1,
  };

  return { ...initValue };
};

const Item = (props) => {
  const { item } = props;
  const orderId = useParams().id;
  const [state, setState] = useState(getInit(orderId, item));
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setState({ ...state, [name]: type === "number" ? +value : value });
  };

  const computeAmount = (value) => {
    if (state.amount + value < 1) return;
    setState({ ...state, amount: state.amount + value });
  };

  const onSubmit = (e) => {
    props.AddCartItem(state);

    setOpen(false);
    setState({
      ...state,
      orderDetail: "",
      extraCost: 0,
      amount: 1,
    });

    e.preventDefault();
  };

  return (
    <Box>
      <MenuItem name="itemName" onClick={() => setOpen(true)}>
        <ListItemText>
          {`${item.itemName} ${item.detail ? "(" + item.detail + ")" : ""}`}
        </ListItemText>

        <Typography color="text.secondary">$ {item.price}</Typography>
      </MenuItem>
      <Dialog
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
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
            Fill in your specific preferences below! <br />
            If you want to add toppings and pay the extra cost, <br />
            please fill in "extra cost" below!
          </DialogContentText>
          <br />
          <TextField
            sx={{ m: 2 }}
            label="Detail"
            name="orderDetail"
            variant="standard"
            placeholder="specific preferences "
            onChange={handleChange}
            value={state.orderDetail}
          />

          <TextField
            sx={{ m: 2 }}
            label="Extra Cost"
            variant="standard"
            type="number"
            name="extraCost"
            onChange={handleChange}
            value={state.extraCost}
          />
          <br />
          <br />
          <div>
            <Button onClick={() => computeAmount(-1)}>-</Button>
            <span>{state.amount}</span>
            <Button onClick={() => computeAmount(1)}>+</Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Add To Cart</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default connect(null, { AddCartItem })(Item);
