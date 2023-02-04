import React, { Fragment, useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import "./index.css";

const Sidebar = () => {
  return (
    <Box m={3}>
      <List>
        <ListItem component="a" href="/">
          <ListItemText
            primary={
              <Typography
                sx={{ color: "#8d6e63", "&:hover": { color: "black" } }}
              >
                All
              </Typography>
            }
          />
        </ListItem>
        <ListItem component="a" href="/">
          <ListItemText
            color="#d7ccc8"
            primary={
              <Typography
                sx={{ color: "#8d6e63", "&:hover": { color: "black" } }}
              >
                Beverage
              </Typography>
            }
          />
        </ListItem>
        <ListItem component="a" href="/">
          <ListItemText
            color="#d7ccc8"
            primary={
              <Typography
                sx={{ color: "#8d6e63", "&:hover": { color: "black" } }}
              >
                LunchBox
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
