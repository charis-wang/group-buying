import { React, useEffect } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const shopTypes = [
  { value: "all", label: "All" },
  { value: "boxedMeal", label: "便當" },
  { value: "beverage", label: "飲料" },
  { value: "vegan", label: "蔬食" },
  { value: "fastFood", label: "速食" },
];

const Sidebar = (props) => {
  useEffect(() => {
    props.select("all");
  }, []);
  return (
    <Box m={3}>
      <List>
        {shopTypes.map((type) => (
          <ListItem
            key={type.value}
            onClick={() => props.select(type.value)}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <ListItemText
              primary={
                <Typography variant="sidebar">{type.label}</Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
