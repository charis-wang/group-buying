import { React, useEffect, useState, Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Button,
  ButtonGroup,
  Box,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import OrderListTableByPerson from "./OrderListTableByPerson";

function createData(item, unit, price, amount, detail, vvv) {
  const sum = price * amount;

  return { item, unit, price, amount, detail, sum, vvv };
}

const rows = [
  createData("伯爵紅茶拿鐵M", "杯", 50, 1, "無糖去冰", 1),
  createData("伯爵紅茶拿鐵L", "杯", 60, 1, "熱", 6),
  createData("大正紅茶拿鐵M", "杯", 50, 1, "半糖去冰", 2),
  createData("大正紅茶拿鐵L", "杯", 60, 1, "正常", 3),
  createData("青檸香茶L", "杯", 60, 5, "溫", 5),
];

const DataOfOrderCreate = {
  initiator: "Charis",
  shop: "KFC",
  deadline: 1672985611,
};

const theDeadline = new Date(DataOfOrderCreate.deadline * 1000).toString();

const CollapsibleRow = (props) => {
  const row = props.row;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props.allOpen);
  }, [props.allOpen]);
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
        <TableCell component="th" scope="row">
          {row.item}
        </TableCell>
        <TableCell align="center">{row.unit}</TableCell>
        <TableCell align="center">{row.price}</TableCell>
        <TableCell align="center">{row.amount}</TableCell>
        <TableCell align="center">{row.sum}</TableCell>
        <TableCell align="center">{row.detail}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                List of Buyers
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Buyer</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Detail</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.vvv}>
                    <TableCell component="th" scope="row">
                      {"buyer"}
                    </TableCell>
                    <TableCell>{"item"}</TableCell>
                    <TableCell align="right">{"detail"}</TableCell>
                    <TableCell align="right">{"amount"}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const OrderViewTable = (props) => {
  const [allOpen, setAllOpen] = useState(false);
  return (
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" colSpan={7}>
            Initiator: {DataOfOrderCreate.initiator}
            <br />
            Shop: {DataOfOrderCreate.shop}
            <br />
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
          <TableCell>Item</TableCell>
          <TableCell align="center">Unit</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Amount</TableCell>
          <TableCell align="center">Sum</TableCell>
          <TableCell align="center">Detail</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <CollapsibleRow allOpen={allOpen} key={row.item} row={row} />
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell align="center" colSpan={4} />
          <TableCell align="center" colSpan={1} sx={{ fontSize: 14 }}>
            Total
          </TableCell>
          <TableCell align="center" colSpan={1} sx={{ fontSize: 14 }}>
            {rows.map((r) => r.sum).reduce((a, b) => a + b)}
          </TableCell>
          <TableCell align="center" colSpan={1} />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default function OrderListTable() {
  const [ViewStatus, setViewStatus] = useState("buyer");
  return (
    <TableContainer component={Paper}>
      <ButtonGroup size="small" aria-label="small button group">
        <Button
          variant={ViewStatus == "order" ? "contained" : "outlined"}
          startIcon={<ReorderOutlinedIcon />}
          onClick={() => setViewStatus("order")}
        >
          order view
        </Button>
        <Button
          variant={ViewStatus == "buyer" ? "contained" : "outlined"}
          startIcon={<PeopleOutlineOutlinedIcon />}
          onClick={() => setViewStatus("buyer")}
        >
          buyer view
        </Button>
      </ButtonGroup>
      {ViewStatus == "order" ? <OrderViewTable /> : <OrderListTableByPerson />}
    </TableContainer>
  );
}

{rows.map((r) => r.sum).reduce((a, b) => a + b)}



import { React, useEffect, useState, Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
  Box,
  Typography,
  TableFooter,
  Collapse,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function createData(item, unit, price, amount, detail, buyer) {
  const sum = price * amount;

  return { item, unit, price, amount, detail, sum, buyer };
}

const rows = [
  createData("伯爵紅茶拿鐵M", "杯", 50, 1, "無糖去冰", "CCCCC"),
  createData("伯爵紅茶拿鐵L", "杯", 60, 1, "熱", "BBBB"),
  createData("大正紅茶拿鐵M", "杯", 50, 1, "半糖去冰", "HIYA"),
  createData("大正紅茶拿鐵L", "杯", 60, 1, "正常", "MYtreat"),
  createData("青檸香茶L", "杯", 60, 5, "溫", "WELCOM"),
];

const DataOfOrderCreate = {
  initiator: "Charis",
  shop: "KFC",
  deadline: 1672985611,
};

const CollapsibleRow = (props) => {
  const row = props.row;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props.allOpen);
  }, [props.allOpen]);
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

        <TableCell align="left">{row.buyer}</TableCell>

        <TableCell align="left">{row.amount}</TableCell>
        <TableCell align="left">{row.sum}</TableCell>
        <TableCell>請趕快付錢</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Item</TableCell>
                    <TableCell align="center">Detail</TableCell>
                    <TableCell align="center">Unit</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.buyer}>
                    <TableCell />
                    <TableCell>{"item"}</TableCell>
                    <TableCell align="center">{"detail"}</TableCell>
                    <TableCell align="center">{"unit"}</TableCell>
                    <TableCell align="center">{"amount"}</TableCell>
                    <TableCell align="center">{"price"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} />
                    <TableCell align="center" colSpan={1}>
                      Total
                    </TableCell>
                    <TableCell align="center">{row.sum}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default function OrderListTableByPerson() {
  const theDeadline = new Date(DataOfOrderCreate.deadline * 1000).toString();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={7} align="left">
              Initiator: {DataOfOrderCreate.initiator}
              <br />
              Shop: {DataOfOrderCreate.shop}
              <br />
              Deadline: {theDeadline}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <IconButton>
                <KeyboardDoubleArrowDownIcon />
              </IconButton>
            </TableCell>
            <TableCell align="left">Buyer</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Sum</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <CollapsibleRow key={row.item} row={row} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} />

            <TableCell align="left" colSpan={1} sx={{ fontSize: 14 }}>
              Total
            </TableCell>
            <TableCell align="left" colSpan={1} sx={{ fontSize: 14 }}>
              {rows.map((r) => r.sum).reduce((a, b) => a + b)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

