import { React, useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import CartItem from "./CartItem";
import { EditCartItem } from "../../../../actions/cart";
import SubmitDialog from "./SubmitDialog";

const CartDialog = (props) => {
  const { open } = props;

  const [cartValues, setCartValues] = useState([]);
  const [clickSubmit, setClickSubmit] = useState(false);

  const initiator = useSelector((state) => state.order.initiator);
  const username = useSelector((state) => state.account.username);

  const handleClose = () => open.set(false);

  const updateAmount = (id, delta) => {
    const amount = cartValues[id].amount;
    const item = { ...cartValues[id], amount: amount + delta };
    const newCartValues = { ...cartValues, [id]: item };

    if (item.amount === 0) delete newCartValues[id];
    setCartValues(newCartValues);
  };

  const onSubmit = (e) => {
    props.EditCartItem(cartValues);
    if (username !== "") {
      setClickSubmit(true);
    }
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
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px", // Set your width here
          },
        },
      }}
      onSubmit={onSubmit}
      component="form"
    >
      <DialogTitle>{`Your Cart List of ${initiator}'s group buying`}</DialogTitle>
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
        <div>
          <Button
            type="submit"
            disabled={Object.values(cartValues).length ? false : true}
          >
            Save
          </Button>
          {clickSubmit ? <SubmitDialog open={clickSubmit} /> : null}
        </div>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(null, { EditCartItem })(CartDialog);
