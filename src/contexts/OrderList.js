import { React, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderListTable from "../components/order/OrderListTable";
import { FetchOrderInfo, SetOrderStatus } from "../actions/order";
import { RemoveCartItem } from "../actions/cart";
import { successMsg } from "../actions/message";
import NotFoundPage from "./NotFoundPage";

const OrderListItem = (props) => {
  const orderId = useParams().id;
  const username = useSelector((state) => state.account.username);
  const initiator = useSelector((state) => state.order.initiator);
  const orderStatus = useSelector((state) => state.order.status);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const cart = useSelector(
    (state) =>
      state.orderItem.filter((item) => username === item.buyer).length > 0
  );

  const setStatus = (status) => {
    if (window.confirm(`Are you sure to setting order ${status}? `))
      props.SetOrderStatus(status);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    const msg = "copy to clipboard";
    props.successMsg(msg);
  };

  const outOfOrder = () => {
    if (window.confirm("Are you sure to be out of this group buying order?")) {
      console.log("ready to delete");
      props.RemoveCartItem(orderId, username);
      navigate();
    }
  };

  useEffect(() => {
    props.FetchOrderInfo(orderId).catch(() => {
      setNotFound(true);
    });
  });

  if (notFound) return <NotFoundPage />;

  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="View Order Detail" />
      <Grid justifyContent="center" container spacing={2} my={2}>
        <Grid item xs={9} md={9} mb={3}>
          <OrderListTable />
        </Grid>
        <Grid item xs={9} md={9} mb={3}>
          <Grid container justifyContent="center">
            {username === initiator || cart !== false ? (
              <div>
                <Button
                  disabled={orderStatus !== "Processing"}
                  color="info"
                  onClick={copyToClipboard}
                >
                  <ContentCopyIcon fontSize="small" />
                  share
                </Button>
                <Button
                  disabled={orderStatus !== "Processing"}
                  color="success"
                  href={`/order/${orderId}/join`}
                >
                  <ShoppingCartOutlinedIcon />
                  cart
                </Button>

                <Button
                  hidden={orderStatus !== "Processing" || cart === false}
                  color="success"
                  onClick={() => outOfOrder()}
                >
                  <ExitToAppIcon />
                  remove cart
                </Button>

                <Button
                  hidden={
                    orderStatus !== "Processing" || username !== initiator
                  }
                  color="secondary"
                  onClick={() => setStatus("Cancelled")}
                >
                  <ClearIcon />
                  cancel
                </Button>

                <Button
                  hidden={
                    orderStatus !== "Processing" || username !== initiator
                  }
                  color="secondary"
                  onClick={() => setStatus("Completed")}
                >
                  <DoneIcon />
                  complete
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  disabled={orderStatus !== "Processing"}
                  color="success"
                  href={`/order/${orderId}/join`}
                >
                  <ShoppingCartOutlinedIcon />
                  join
                </Button>
                <Button
                  disabled={orderStatus !== "Processing"}
                  color="success"
                  onClick={copyToClipboard}
                >
                  <ContentCopyIcon fontSize="small" />
                  share
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, {
  FetchOrderInfo,
  SetOrderStatus,
  RemoveCartItem,
  successMsg,
})(OrderListItem);
