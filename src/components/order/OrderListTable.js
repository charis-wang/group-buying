import { React, useState } from "react";
import { TableContainer, Paper, Button, ButtonGroup } from "@mui/material";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { getGroupData, add, getOrderSubTotal } from "../../utils/base";
import { orderRawData } from "../../utils/mockData";
import OrderTableView from "./OrderTableView";

const dataOfOrderCreate = {
  initiator: "Charis",
  shop: "KFC",
  deadline: 1672985611,
};

const TableTitlesMap = {
  buyer: [
    { key: "buyer", value: "Buyer" },
    { key: "amount", value: "Amount" },
    { key: "sum", value: "Sum" },
    { key: "status", value: "Status" },
  ],
  item: [
    { key: "item", value: "Item" },
    { key: "price", value: "Price" },
    { key: "amount", value: "Amount" },
    { key: "sum", value: "Sum" },
    { key: "detail", value: "Detail" },
  ],
};
const CollapseTableTitlesMap = {
  buyer: [
    { key: "item", value: "Item" },
    { key: "price", value: "Price" },
    { key: "amount", value: "Amount" },
  ],
  item: [
    { key: "buyer", value: "Buyer" },
    { key: "item", value: "Item" },
    { key: "amount", value: "Amount" },
    { key: "detail", value: "Detail" },
  ],
};

const getItemOrderMap = (data) => {
  let itemOrderMap = getGroupData(data, "item");

  for (let item in itemOrderMap) {
    const orders = itemOrderMap[item];
    itemOrderMap[item] = {
      summary: {
        item,
        price: orders[0].price,
        amount: orders.map((row) => row.amount).reduce(add),
        sum: orders.map(getOrderSubTotal).reduce(add),
        detail: "hello world",
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
    buyerOrderMap[buyer] = {
      summary: {
        buyer,
        amount: orders.map((row) => row.amount).reduce(add),
        sum: orders.map(getOrderSubTotal).reduce(add),
        status: orders[0].status == "paid" ? "收到錢" : "給我錢",
      },
      orders: orders,
    };
  }

  return buyerOrderMap;
};

export default function OrderListTable() {
  const [ViewStatus, setViewStatus] = useState("item");
  return (
    <TableContainer component={Paper}>
      <ButtonGroup size="small" aria-label="small button group">
        <Button
          variant={ViewStatus == "item" ? "contained" : "outlined"}
          startIcon={<ReorderOutlinedIcon />}
          onClick={() => setViewStatus("item")}
        >
          item view
        </Button>
        <Button
          variant={ViewStatus == "buyer" ? "contained" : "outlined"}
          startIcon={<PeopleOutlineOutlinedIcon />}
          onClick={() => setViewStatus("buyer")}
        >
          buyer view
        </Button>
      </ButtonGroup>
      {ViewStatus == "item" ? (
        <OrderTableView
          dataOfOrderCreate={dataOfOrderCreate}
          tableTitles={TableTitlesMap.item}
          collapseTableTitles={CollapseTableTitlesMap.item}
          orderData={getItemOrderMap(orderRawData)}
        />
      ) : (
        <OrderTableView
          dataOfOrderCreate={dataOfOrderCreate}
          tableTitles={TableTitlesMap.buyer}
          collapseTableTitles={CollapseTableTitlesMap.buyer}
          orderData={getBuyerOrderMap(orderRawData)}
        />
      )}
    </TableContainer>
  );
}
