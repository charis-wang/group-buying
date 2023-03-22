import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import MenuTableRow from "./MenuTableRow";

const unzipMenuByGroup = (menu) => {
  return Object.values(menu).reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
};

export default function MenuTable(props) {
  const menus = useSelector((state) => unzipMenuByGroup(state.menu));

  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => setReadOnly(props.display !== "menu"), [props.display]);

  return (
    <Grid container justifyContent="center">
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
            {menus.map((row) => (
              <MenuTableRow
                key={row.groupName + row.itemName}
                row={row}
                display={readOnly}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
