import React, { useState } from "react";
import { connect } from "react-redux";
import { TableCell, TableRow, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { DeleteMenu } from "../../actions/menu";

const MenuTableRow = (props) => {
  const { row } = props;
  const [removed, setRemoved] = useState(false);

  if (removed) return;

  return (
    <TableRow
      key={row.groupName + row.itemName}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.groupName}
      </TableCell>
      <TableCell align="left">{row.itemName}</TableCell>
      <TableCell align="left">${row.price}</TableCell>
      <TableCell align="left">{row.detail}</TableCell>
      <TableCell align="left">
        <IconButton
          onClick={() => {
            setRemoved(true);
            props.DeleteMenu(row);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default connect(null, { DeleteMenu })(MenuTableRow);
