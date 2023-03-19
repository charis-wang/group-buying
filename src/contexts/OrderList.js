import { React, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Box, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderListTable from "../components/order/OrderListTable";
import { FetchOrderInfo, SetOrderStatus } from "../actions/order";
import { successMsg } from "../actions/message";
import NotFoundPage from "./NotFoundPage";

const OrderListItem = (props) => {
  const orderId = useParams().id;
  const username = useSelector((state) => state.account.username);
  const initiator = useSelector((state) => state.order.initiator);
  const orderStatus = useSelector((state) => state.order.status);
  const [notFound, setNotFound] = useState(false);

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
                  color="success"
                  href={`/order/${orderId}/join`}
                >
                  <EditIcon />
                  edit
                </Button>

                <Button
                  disabled={
                    orderStatus !== "Processing" || username !== initiator
                  }
                  color="success"
                  onClick={() => setStatus("Cancelled")}
                >
                  <ClearIcon />
                  cancel
                </Button>

                <Button
                  disabled={
                    orderStatus !== "Processing" || username !== initiator
                  }
                  color="success"
                  onClick={() => setStatus("Completed")}
                >
                  <DoneIcon />
                  complete
                </Button>
              </div>
            ) : (
              <div>
                <Button color="success" href={`/order/${orderId}/join`}>
                  join
                </Button>
                <IconButton color="success" onClick={copyToClipboard}>
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { FetchOrderInfo, SetOrderStatus, successMsg })(
  OrderListItem
);
