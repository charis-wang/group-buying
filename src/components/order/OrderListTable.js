import * as React from "react";
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

function createData(item, unit, price, count, detail, vvv) {
  const sum = price * count;

  return { item, unit, price, count, detail, sum, vvv };
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

export default function OrderListTable() {
  const theDeadline = new Date(DataOfOrderCreate.deadline * 1000).toString();

  const CollapsibleRow = (props) => {
    const row = props.row;
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
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
          <TableCell align="center">{row.count}</TableCell>
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
      </React.Fragment>
    );
  };
  return (
    <TableContainer component={Paper}>
      <ButtonGroup size="small" aria-label="small button group">
        <Button variant="contained">group by order</Button>
        <Button>group by person</Button>
      </ButtonGroup>

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
            <TableCell />
            <TableCell>Item</TableCell>
            <TableCell align="center">Unit</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Sum</TableCell>
            <TableCell align="center">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <CollapsibleRow key={row.item} row={row} />
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
    </TableContainer>
  );
}
