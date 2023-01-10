import { React } from "react";
import {
  Paper,
  MenuList,
  MenuItem,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

import "../../index.css";
import { orderInfo, groupMenus } from "../../../utils/mockData";
import { ItemList } from "./ItemList";

export default function OrderMenu() {
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
            MENU of {orderInfo.shopName}
          </Typography>
        </Grid>
        <Grid item>
          <MenuList sx={{ minWidth: 300, maxWidth: "100%", m: 2 }}>
            <Grid container spacing={1}>
              {groupMenus.map((group) => (
                <Grid item xs={12} md={6} lg={4} key={group.groupId}>
                  <MenuItem disabled style={{ opacity: "unset" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "rgb(103, 131, 104)",
                        pr: 2,
                      }}
                    >
                      {group.groupName}
                    </Typography>
                    <Typography variant="subtitle" color="gray">
                      *{group.detail}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <ItemList items={group.items} />
                </Grid>
              ))}
            </Grid>
          </MenuList>
        </Grid>
      </Grid>
    </Paper>
  );
}
