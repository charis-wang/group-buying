import { React } from "react";
import { useSelector, connect } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

import NavbarDrawer from "./NavbarDrawer.js";
import { logout } from "../actions/account";

const Navbar = (props) => {
  const status = useSelector((state) => state.account.login);
  const logout = () => {
    props.logout();
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
            <Button
              color="inherit"
              href="/order/new"
              sx={{
                "&:hover": {
                  color: "unset",
                },
              }}
            >
              Create Order
            </Button>
          </Box>

          {status ? (
            <Box sx={{ whiteSpace: "nowrap" }}>
              <Button
                color="inherit"
                href="/login"
                sx={{
                  "&:hover": {
                    color: "unset",
                  },
                }}
                onClick={logout}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Box sx={{ whiteSpace: "nowrap" }}>
              <Button
                color="inherit"
                href="/login"
                sx={{
                  "&:hover": {
                    color: "unset",
                  },
                }}
              >
                Login
              </Button>
              |
              <Button
                color="inherit"
                href="/signup"
                sx={{
                  "&:hover": {
                    color: "unset",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default connect(null, { logout })(Navbar);
