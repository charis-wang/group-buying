import { React, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";
import OrderListTable from "../components/order/OrderListTable";
import { FetchOrderInfo, SetOrderStatus } from "../actions/order";

const OrderListItem = (props) => {
  const orderId = useParams().id;
  const username = useSelector((state) => state.account.username);
  const initiator = useSelector((state) => state.order.initiator);
  const orderStatus = useSelector((state) => state.order.status);

  const setStatus = (status) => {
    if (window.confirm(`Are you sure to setting order ${status}? `))
      props.SetOrderStatus(status);
  };

  useEffect(() => {
    props.FetchOrderInfo(orderId);
  });

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
            {username === initiator ? (
              <div>
                <Button
                  disabled={
                    orderStatus === "Completed" || orderStatus === "Cancelled"
                  }
                  color="success"
                  href={`/order/${orderId}/join`}
                >
                  <EditIcon />
                  edit
                </Button>

                <Button
                  disabled={
                    orderStatus === "Completed" || orderStatus === "Cancelled"
                  }
                  color="success"
                  href={`/order/${orderId}/join`}
                  onClick={() => setStatus("Cancelled")}
                >
                  <ClearIcon />
                  cancel
                </Button>

                <Button
                  disabled={
                    orderStatus === "Completed" || orderStatus === "Cancelled"
                  }
                  color="success"
                  href={`/order/${orderId}/join`}
                  onClick={() => setStatus("Completed")}
                >
                  <DoneIcon />
                  complete
                </Button>
              </div>
            ) : (
              <Button color="success" href={`/order/${orderId}/join`}>
                join
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { FetchOrderInfo, SetOrderStatus })(OrderListItem);
