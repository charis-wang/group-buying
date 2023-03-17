import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Grid, Box, Button, TextField, Typography } from "@mui/material";

import { login } from "../actions/account";
import { errorMsg } from "../actions/message";

const errorMessageMap = {
  loginRequired: "login required",
};

const LoginForm = (props) => {
  const [state, setState] = useState({});
  const [touched, setTouched] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const errorMessage = errorMessageMap[searchParams.get("err")];

  const onSubmit = (e) => {
    props.login(state).then(() => {
      setState({});
      setTouched({});
    });

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (errorMessage) {
      props.errorMsg(errorMessage);
      setSearchParams({});
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 8,
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
          autoComplete="username"
          onChange={handleChange}
          error={touched.username && !state.username}
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
          error={touched.password && !state.password}
          onFocus={() => setTouched({ ...touched, password: true })}
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

export default connect(null, { login, errorMsg })(LoginForm);
