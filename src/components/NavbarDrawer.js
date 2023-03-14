import { React, useState, Fragment } from "react";
import {
  Box,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Homepage", "Create Menu", "Create Order"];
const ref = (text) => {
  if (text === "Create Menu") return "/menu/new";
  else if (text === "Create Order") return "/order/new";
  return "/";
};

export default function NavbarDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              color: "inherit",
              "&:hover": {
                color: "white",
                backgroundColor: "gray",
              },
            }}
            component="a"
            href={ref(text)}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            size="large"
            edge="start"
            color="#ffff"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", sm: "none", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
