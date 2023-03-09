import { React, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Badge, Fab } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import CartDialog from "./cart/CartDialog";
import { sum } from "../../../utils/base";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const orderStatus = useSelector((state) => state.order.status);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Fab
        disabled={orderStatus !== "Processing"}
        sx={{
          position: "fixed",
          bottom: "2%",
          right: "2.5%",
          backgroundColor: "#e6fad4",
          "&:hover": {
            backgroundColor: "#bde09f",
          },
        }}
        onClick={() => setOpen(true)}
      >
        <Badge
          color="success"
          badgeContent={sum(Object.values(cart).map((item) => item.amount))}
        >
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Fab>
      <CartDialog open={open} setOpen={setOpen} cartValues={cart} />
    </Fragment>
  );
};

export default ShoppingCart;
