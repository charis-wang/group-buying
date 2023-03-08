import { React, useState } from "react";
import { connect } from "react-redux";
import { Box, Button, TextField } from "@mui/material";

import { signUp } from "../actions/account";

const initialState = {
  username: "",
  password: "",
  email: "",
  phoneNumber: "",
};

const initialTouchedState = {
  username: false,
  password: false,
  email: false,
  phoneNumber: false,
};

const SignupForm = (props) => {
  const [state, setState] = useState({ ...initialState });
  const [touched, setTouched] = useState({ ...initialTouchedState });

  const onSubmit = (e) => {
    props.signUp(state).then((success) => {
      if (success) {
        window.location.href = "/";
      }
    });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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
      <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: "25rem" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="account"
          onChange={handleChange}
          error={touched.username && state.username === ""}
          onFocus={() => setTouched({ ...touched, username: true })}
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
          onChange={handleChange}
          error={touched.password && state.username === ""}
          onFocus={() => setTouched({ ...touched, password: true })}
        />
        <TextField
          margin="normal"
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          autoComplete="email"
          onChange={handleChange}
          error={
            touched.email &&
            !state.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i)
          }
          onFocus={() => setTouched({ ...touched, email: true })}
        />
        <TextField
          margin="normal"
          fullWidth
          name="phoneNumber"
          label="Phone Number"
          id="phoneNumber"
          onChange={handleChange}
          placeholder="02-12345678"
          error={
            touched.phoneNumber &&
            !state.phoneNumber.match(/^0[0-9]{1}-[0-9]{7,8}$/)
          }
          onFocus={() => setTouched({ ...touched, phoneNumber: true })}
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
export default connect(null, { signUp })(SignupForm);
