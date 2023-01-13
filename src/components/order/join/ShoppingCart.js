import { React, useState, Fragment } from "react";
import {
  Badge,
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [removed, setRemoved] = useState(false);

  const [count, setCount] = useState(1);

  const CartItem = () => {
    return (
      <div>
        <Typography component={"span"}>四季春拿鐵 $ 60</Typography>

        <Button
          onClick={() =>
            count - 1 >= 1 ? setCount(count - 1) : setRemoved(true)
          }
        >
          -
        </Button>
        <span>{count}</span>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
    );
  };

  return (
    <Fragment>
      <Fab
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          backgroundColor: "#e6fad4",
          "&:hover": {
            backgroundColor: "#bde09f",
          },
        }}
        onClick={handleClickOpen}
      >
        <Badge color="success" badgeContent={99}>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Fab>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        sx={{ backgroundColor: "rgba(255,255,255,0.2)" }}
      >
        <DialogTitle>Your Cart List of Dixon's group buying</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check your cart list and submit!
            <br />
          </DialogContentText>
          <br />

          {removed ? null : <CartItem />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
