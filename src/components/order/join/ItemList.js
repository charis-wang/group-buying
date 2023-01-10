import { React } from "react";
import { MenuItem, ListItemText, Typography } from "@mui/material";

export const ItemList = (props) => {
  const { items } = props;

  return items.map((item) => (
    <MenuItem key={item.itemId}>
      <ListItemText>
        {`${item.itemName} ${item.detail ? "(" + item.detail + ")" : ""}`}
      </ListItemText>

      <Typography color="text.secondary">$ {item.price}</Typography>
    </MenuItem>
  ));
};
