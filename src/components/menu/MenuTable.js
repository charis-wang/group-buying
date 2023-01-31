import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import MenuTableRow from "./MenuTableRow";

export default function MenuTable(props) {
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
            <TableCell align="left">Group Name</TableCell>
            <TableCell align="left">Item Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Detail</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <MenuTableRow key={row.groupName + row.itemName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
