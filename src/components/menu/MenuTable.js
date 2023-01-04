import React, { useEffect, useState, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(item, unit, price) {
  return { item, unit, price };
}

// const rows = [
//   createData('伯爵紅茶拿鐵M', '杯', 50),
//   createData('伯爵紅茶拿鐵L', '杯', 60),
//   createData('大正紅茶拿鐵M', '杯', 50),
//   createData('大正紅茶拿鐵L', '杯', 60),
//   createData('青檸香茶L', '杯', 60),
// ];

const rowsTest = [
  ["伯爵紅茶拿鐵M", "杯", 50],
  ["伯爵紅茶拿鐵L", "杯", 60],
  ["大正紅茶拿鐵M", "杯", 50],
  ["大正紅茶拿鐵L", "杯", 60],
  ["青檸香茶L", "杯", 60],
].map((data) => createData(data));

export default function MenuTable(props) {
  //console.log('MenuTable', props.value)
  const [getFormValues, setGetFormValues] = useState("");
  const [rows, setRows] = useState([]);
  const updateGetFormValues = () => {
    if (!props.value) return;

    setGetFormValues(props.value);
    setRows([...rows, props.value]);
  };

  useEffect(() => {
    if (props.value !== null) {
      updateGetFormValues();
    }
  }, [props.value]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        display: "flex",
        m: 1,
        minWidth: "100",
        width: "80%",
      }}
    >
      <Table sx={{ m: 1 }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>

            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.item}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
