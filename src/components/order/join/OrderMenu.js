import { React } from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  MenuList,
  MenuItem,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

import Item from "./Item";

const OrderMenu = (props) => {
  const groupMenus = useSelector((state) => state.menu);
  const { available } = props;
  return (
    <Paper variant="menu">
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="left"
        alignItems="center"
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography align="center" variant="h3">
            MENU
          </Typography>
        </Grid>
        <Grid item>
          <MenuList sx={{ minWidth: 300, maxWidth: "100%", m: 2 }}>
            <Grid container spacing={1}>
              {Object.entries(groupMenus).map((group) => (
                <Grid item xs={12} md={6} lg={4} key={group[1][0].groupName}>
                  <MenuItem disabled style={{ opacity: "unset" }}>
                    <Typography variant="groupName">{group[0]}</Typography>
                  </MenuItem>
                  <Divider />
                  {group[1].map((item) => (
                    <Item
                      available={available}
                      item={item}
                      key={item._id + item.itemName}
                    ></Item>
                  ))}
                </Grid>
              ))}
            </Grid>
          </MenuList>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderMenu;
