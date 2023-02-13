import React from "react";

import { Box, Button, TextField } from "@mui/material";

const SignupForm = () => {
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
        mx: 8,
        my: 2,
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
        <TextField
          margin="normal"
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          fullWidth
          name="phoneNumber"
          label="Phone Number"
          id="phoneNumber"
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
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default SignupForm;
