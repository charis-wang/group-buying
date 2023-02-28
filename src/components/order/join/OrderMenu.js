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

  return (
    <Paper sx={{ width: 4000, maxWidth: "100%" }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="left"
        alignItems="center"
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography align="center" variant="h3" fontFamily="Kaushan Script">
            MENU
          </Typography>
        </Grid>
        <Grid item>
          <MenuList sx={{ minWidth: 300, maxWidth: "100%", m: 2 }}>
            <Grid container spacing={1}>
              {Object.entries(groupMenus).map((group) => (
                <Grid item xs={12} md={6} lg={4} key={group[1][0].groupName}>
                  <MenuItem disabled style={{ opacity: "unset" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "rgb(103, 131, 104)",
                        pr: 2,
                      }}
                    >
                      {group[0]}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  {group[1].map((item) => (
                    <Item item={item} key={item._id + item.itemName}></Item>
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
