import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(item, unit, price, count, detail) {
  const sum = price * count
  return { item, unit, price, count, detail, sum };
}



const rows = [
  createData('伯爵紅茶拿鐵M', '杯', 50, 3, '無糖去冰*3'),
  createData('伯爵紅茶拿鐵L', '杯', 60, 3, '熱*3'),
  createData('大正紅茶拿鐵M', '杯', 50, 5, '半糖去冰*5'),
  createData('大正紅茶拿鐵L', '杯', 60, 5, '正常*5'),
  createData('青檸香茶L', '杯', 60, 5, '溫*5'),
];

export default function OrderListDetail() {
  //console.log(this)



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
            <TableRow
              key={row.item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="center">{row.unit}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.count}</TableCell>
              <TableCell align="center">{row.sum}</TableCell>
              <TableCell align="center">{row.detail}</TableCell>

            </TableRow>
          ))}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">{rows.map(r => r.sum).reduce((a, b) => a + b)}</TableCell>

          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}