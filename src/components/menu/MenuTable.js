import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(item, unit, price) {
  return { item, unit, price };
}

const rows = [
  createData('伯爵紅茶拿鐵M', '杯', 50),
  createData('伯爵紅茶拿鐵L', '杯', 60),
  createData('大正紅茶拿鐵M', '杯', 50),
  createData('大正紅茶拿鐵L', '杯', 60),
  createData('青檸香茶L', '杯', 60),
];

export default function MenuTable() {
  console.log(this)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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