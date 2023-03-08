import { React, useEffect, useState, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { getDatetimeString, add } from "../../utils/base";
import OrderStatusDialog from "./OrderStatusDialog";
import { SetPaymentStatus } from "../../actions/order";

const CollapsibleRow = (props) => {
  const { allOpen, tableTitles, collapseTableTitles, summary, orders } = props;
  const [open, setOpen] = useState(false);

  const username = useSelector((state) => state.account.username);
  const initiator = useSelector((state) => state.order.initiator);
  useEffect(() => setOpen(allOpen), [allOpen]);

  const onSubmit = (value) => {
    props.SetPaymentStatus({ buyer: summary.buyer, status: value });
  };

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {tableTitles.map((title) => (
          <TableCell align="center" key={title.key}>
            {title.key === "status" ? (
              <OrderStatusDialog
                onSubmit={onSubmit}
                display={summary[title.key]}
                rejection={username !== initiator && username !== summary.buyer}
              />
            ) : (
              summary[title.key]
            )}
          </TableCell>
        ))}
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    {collapseTableTitles.map((title) => (
                      <TableCell align="center" key={title.key}>
                        {title.value}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row) => (
                    <TableRow key={row.buyer + row.itemId + row.orderDetail}>
                      <TableCell />
                      {collapseTableTitles.map((title) => (
                        <TableCell
                          align="center"
                          key={row.id + title.key + row[title.key]}
                        >
                          {row[title.key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const OrderTableView = (props) => {
  const [allOpen, setAllOpen] = useState(false);
  const { dataOfOrderCreate, tableTitles, collapseTableTitles, orderData } =
    props;

  const orderStatus = useSelector((state) => state.order.status);
  const theDeadline = getDatetimeString(dataOfOrderCreate.orderDeadline);
  const rows = Object.entries(orderData);
  const total = Object.values(orderData)
    .map((orders) => orders.summary.sum)
    .reduce(add, 0);

  return (
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell
            align="center"
            sx={{
              color: "#a1887f",
              fontWeight: "bold",
            }}
          >
            {orderStatus}
          </TableCell>
          <TableCell align="left" colSpan={7}>
            Initiator: {dataOfOrderCreate.initiator} <br />
            Shop: {dataOfOrderCreate.shop} <br />
            Deadline: {theDeadline}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setAllOpen(!allOpen)}
            >
              {allOpen ? (
                <KeyboardDoubleArrowUpIcon />
              ) : (
                <KeyboardDoubleArrowDownIcon />
              )}
            </IconButton>
          </TableCell>

          {tableTitles.map((title) => (
            <TableCell align="center" key={title.key}>
              {title.value}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map(([key, value]) => (
          <CollapsibleRow
            SetPaymentStatus={props.SetPaymentStatus}
            key={key}
            allOpen={allOpen}
            tableTitles={tableTitles}
            collapseTableTitles={collapseTableTitles}
            summary={value.summary}
            orders={value.orders}
          />
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell align="center" colSpan={tableTitles.length - 2} />
          <TableCell align="center" colSpan={1} sx={{ fontSize: 14 }}>
            Total
          </TableCell>
          <TableCell align="center" colSpan={1} sx={{ fontSize: 14 }}>
            {total}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default connect(null, { SetPaymentStatus })(OrderTableView);
