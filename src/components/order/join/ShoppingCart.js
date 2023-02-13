import { React, setState, Fragment, Component } from "react";
import { Badge, Fab } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { connect } from "react-redux";
import { EditCartItem } from "../../../actions";
import { CartDialog } from "./cart/CartDialog";
import { sum } from "../../../utils/base";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      notificationNumber: "",
    };
  }

  open = {
    get: () => {
      return this.state.open;
    },
    set: (value) => {
      this.setState({ open: value });
    },
  };

  onSubmit = (formValues) => {
    this.props.EditCartItem(formValues);
  };

  notify = () => {
    setState({ notificationNumber: 123 });
    return this.state.notificationNumber;
  };

  render() {
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
          onClick={() => this.open.set(true)}
        >
          <Badge
            color="success"
            badgeContent={sum(
              Object.values(this.props.cart).map((item) => item.amount)
            )}
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Fab>
        <CartDialog
          open={this.open}
          onSubmit={this.onSubmit}
          cartValues={this.props.cart}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, { EditCartItem })(ShoppingCart);
