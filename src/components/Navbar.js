import React, { Fragment } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavbarDrawer from "./NavbarDrawer";
import { ButtonGroup } from "react-bootstrap";

const pages = ["Products", "Pricing", "Blog"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 2, justifyContent: "space-between" }}>
      <AppBar position="static" sx={{ bgcolor: "#d7ccc8" }}>
        <Toolbar>
          <NavbarDrawer />
          <Typography
            noWrap
            href="/"
            variant="h6"
            component="a"
            sx={{
              mr: 2,
              display: "flex",
              color: "inherit",
              textDecoration: "none",
              ":hover": { color: "#ffffff" },
            }}
          >
            Group Buying
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },

              whiteSpace: "nowrap",
            }}
          >
            <Button color="inherit">Menu</Button>
            <Button
              color="inherit"
              href="/menu/new"
              sx={{
                "&:hover": {
                  color: "unset",
                },
              }}
            >
              Create Menu
            </Button>
            <Button color="inherit">Create Order</Button>
            <Button color="inherit">Join Order</Button>
          </Box>
          <Box>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
