import { React, Component } from "react";
import {
  Paper,
  MenuList,
  MenuItem,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { connect } from "react-redux";

import "../../index.css";
import { orderInfo, groupMenus } from "../../../utils/mockData";
import Item from "./Item";
import { AddCartItem } from "../../../actions";

class OrderMenu extends Component {
  onSubmit = (formValues) => {
    this.props.AddCartItem(formValues);
  };

  render() {
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
                    {group.items.map((item) => (
                      <Item
                        item={item}
                        key={item.itemId}
                        onSubmit={this.onSubmit}
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
  }
}
export default connect(null, { AddCartItem })(OrderMenu);
