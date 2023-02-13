import React from "react";

import {
  Grid,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 8,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ maxWidth: "25rem" }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="account"
          label="Account"
          name="account"
          autoComplete="account"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            my: 3,
            bgcolor: "#ABC270",
            ":hover": { bgcolor: "#4E6C50" },
          }}
        >
          Sign In
        </Button>
        <Grid item>
          <Typography
            component="a"
            href="/signup"
            variant="body2"
            sx={{ color: "#4E6C50", ":hover": { color: "#ABC270" } }}
          >
            "Don't have an account? Sign Up"
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginForm;
