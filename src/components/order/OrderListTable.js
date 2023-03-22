import { React, useState } from "react";
import { useSelector } from "react-redux";
import { TableContainer, Paper, Button, ButtonGroup } from "@mui/material";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import { getGroupData, add, getOrderSubTotal } from "../../utils/base";
import OrderTableView from "./OrderTableView";

const TableTitlesMap = {
  buyer: [
    { key: "buyer", value: "Buyer" },
    { key: "amount", value: "Amount" },
    { key: "sum", value: "Sum" },
    { key: "status", value: "Status" },
  ],
  item: [
    { key: "item", value: "Item" },
    { key: "amount", value: "Amount" },
    { key: "sum", value: "Sum" },
  ],
};
const CollapseTableTitlesMap = {
  buyer: [
    { key: "itemName", value: "Item" },
    { key: "price", value: "Price" },
    { key: "orderDetail", value: "Detail" },
    { key: "extraCost", value: "Extra Cost" },

    { key: "amount", value: "Amount" },
    { key: "subtotal", value: "Subtotal" },
  ],
  item: [
    { key: "buyer", value: "Buyer" },
    { key: "itemName", value: "Item" },
    { key: "orderDetail", value: "Detail" },
    { key: "extraCost", value: "Extra Cost" },
    { key: "amount", value: "Amount" },
    { key: "subtotal", value: "Subtotal" },
  ],
};

const getStatus = (statuses) => {
  let status = "unpaid";

  if (statuses.every((status) => status === "confirmed")) status = "confirmed";
  if (statuses.some((status) => status === "paid")) status = "paid";

  return status;
};

const getItemOrderMap = (data) => {
  let itemOrderMap = getGroupData(data, "itemName");

  for (let item in itemOrderMap) {
    const orders = itemOrderMap[item];
    itemOrderMap[item] = {
      summary: {
        item,
        price: orders[0].price,
        amount: orders.map((row) => row.amount).reduce(add),
        sum: orders.map(getOrderSubTotal).reduce(add),
      },
      orders: orders,
    };
  }

  return itemOrderMap;
};

const getBuyerOrderMap = (data) => {
  let buyerOrderMap = getGroupData(data, "buyer");

  for (let buyer in buyerOrderMap) {
    const orders = buyerOrderMap[buyer];
    const status = getStatus(orders.map((order) => order.status));

    buyerOrderMap[buyer] = {
      summary: {
        buyer,
        amount: orders.map((row) => row.amount).reduce(add),
        sum: orders.map(getOrderSubTotal).reduce(add),
        status: status,
      },
      orders: orders,
    };
  }

  return buyerOrderMap;
};

const OrderListTable = (props) => {
  const orderInfo = useSelector((state) => state.order);
  const orderItems = useSelector((state) => state.orderItem);
  const [viewStatus, setViewStatus] = useState("buyer");

  return (
    <TableContainer component={Paper}>
      <ButtonGroup size="small" aria-label="small button group">
        <Button
          variant={viewStatus === "buyer" ? "contained" : "outlined"}
          startIcon={<PeopleOutlineOutlinedIcon />}
          onClick={() => setViewStatus("buyer")}
          sx={
            viewStatus === "buyer"
              ? {
                  bgcolor: "#a1887f",
                  color: "#fff",
                  borderColor: "#a1887f",
                  ":hover": {
                    bgcolor: "#a1887f",
                    color: "#fff",
                    borderColor: "#a1887f",
                  },
                }
              : {
                  bgcolor: "#fffff",
                  color: "#a1887f",
                  borderColor: "#a1887f",
                  ":hover": {
                    bgcolor: "#fffff",
                    color: "#a1887f",
                    borderColor: "#a1887f",
                  },
                }
          }
        >
          buyer view
        </Button>
        <Button
          variant={viewStatus === "item" ? "contained" : "outlined"}
          startIcon={<ReorderOutlinedIcon />}
          onClick={() => setViewStatus("item")}
          sx={
            viewStatus === "item"
              ? {
                  bgcolor: "#a1887f",
                  color: "#fff",
                  borderColor: "#a1887f",
                  ":hover": {
                    bgcolor: "#a1887f",
                    color: "#fff",
                    borderColor: "#a1887f",
                  },
                }
              : {
                  bgcolor: "#fffff",
                  color: "#a1887f",
                  borderColor: "#a1887f",
                  ":hover": {
                    bgcolor: "#fffff",
                    color: "#a1887f",
                    borderColor: "#a1887f",
                  },
                }
          }
        >
          item view
        </Button>
      </ButtonGroup>
      {viewStatus === "item" ? (
        <OrderTableView
          dataOfOrderCreate={orderInfo}
          tableTitles={TableTitlesMap.item}
          collapseTableTitles={CollapseTableTitlesMap.item}
          orderData={getItemOrderMap(orderItems)}
        />
      ) : (
        <OrderTableView
          dataOfOrderCreate={orderInfo}
          tableTitles={TableTitlesMap.buyer}
          collapseTableTitles={CollapseTableTitlesMap.buyer}
          orderData={getBuyerOrderMap(orderItems)}
        />
      )}
    </TableContainer>
  );
};

export default OrderListTable;
