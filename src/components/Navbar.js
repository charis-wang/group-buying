import { React, useEffect, useState } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

import NavbarDrawer from "./NavbarDrawer.js";
import { logout } from "../actions/account";
import SwitchOfMode from "./SwitchOfMode.js";
import { ChangeThemeMode } from "../actions/theme.js";

const Navbar = (props) => {
  const status = useSelector((state) => state.account.login);

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.themeMode.themeMode);

  const logout = () => {
    props.logout();
  };

  const toggleTheme = () => {
      const prevTheme = theme;
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      dispatch(ChangeThemeMode({themeMode: newTheme}));
  };
  
  return (
    <Box sx={{ flexGrow: 2, justifyContent: "space-between" }}>
      <AppBar position="static" >
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
              Create Group Order
            </Button>
            <Button
              color="inherit"
              href="/myorder"
              sx={{
                "&:hover": {
                  color: "unset",
                },
              }}
            >
              My Order
            </Button>
          </Box>
          <SwitchOfMode checked={theme === "dark"} onChange={toggleTheme} />

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
