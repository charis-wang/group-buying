import { React, useEffect } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const shopTypes = [
  { value: "all", label: "All" },
  { value: "boxedMeal", label: "便當" },
  { value: "beverage", label: "飲料" },
  { value: "vegan", label: "蔬食" },
  { value: "fastFood", label: "速食" },
];

const HorizontalBar = (props) => {
  useEffect(() => {
    props.select("all");
  }, []);
  return (
    <Box m={2}>
      <List sx={{ display: "flex", flexDirection: "row" }}>
        {shopTypes.map((type) => (
          <ListItem
            disableGutters
            key={type.value}
            onClick={() => props.select(type.value)}
            sx={{ "&:hover": { cursor: "pointer" }, width: "50px" }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{ color: "#8d6e63", "&:hover": { color: "black" } }}
                >
                  {type.label}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HorizontalBar;
