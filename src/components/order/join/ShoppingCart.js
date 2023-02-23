import { React, Fragment, useState } from "react";
import { connect } from "react-redux";
import { Badge, Fab } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { EditCartItem } from "../../../actions/cart";
import CartDialog from "./cart/CartDialog";
import { sum } from "../../../utils/base";

const ShoppingCart = (props) => {
  const [state, setState] = useState({
    open: false,
    notificationNumber: "",
  });

  const open = {
    get: () => {
      return state.open;
    },
    set: (value) => {
      setState({ open: value });
    },
  };

  const onSubmit = (formValues) => {
    props.EditCartItem();
  };

  return (
    <Fragment>
      <Fab
        sx={{
          position: "fixed",
          bottom: "2%",
          right: "2.5%",
          backgroundColor: "#e6fad4",
          "&:hover": {
            backgroundColor: "#bde09f",
          },
        }}
        onClick={() => open.set(true)}
      >
        <Badge
          color="success"
          badgeContent={sum(
            Object.values(props.cart).map((item) => item.amount)
          )}
        >
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Fab>
      <CartDialog open={open} onSubmit={onSubmit} cartValues={props.cart} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { EditCartItem })(ShoppingCart);
