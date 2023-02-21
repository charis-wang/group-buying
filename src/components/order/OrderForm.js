import { React, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Box, TextField, Button, Grid, MenuItem } from "@mui/material";
import dayjs from "dayjs";

import OrderDateTimePicker from "./OrderDateTimePicker";
import { fetchShops } from "../../apis/shop";
import { CreateOrder } from "../../actions/order";

const OrderForm = (props) => {
  const username = useSelector((state) => state.account.username);
  const [shopOptions, setShopOptions] = useState([]);
  const [state, setState] = useState({
    shop: "",
    initiator: username || "",
    orderDeadline: dayjs().unix(),
  });
  const [touched, setTouched] = useState({
    orderDeadline: false,
    initiator: false,
    shop: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const submitHandler = (e) => {
    props
      .CreateOrder(state)
      .then((res) => (window.location.href = `/order/${res.data.id}`));
    e.preventDefault();
  };

  useEffect(() => {
    fetchShops().then((res) => setShopOptions(res.data.shops));
  }, []);

  useEffect(() => {
    setState({ ...state, initiator: username });
  }, [username]);

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={submitHandler}
      mt={5}
      mx={0}
    >
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item xs={12} md="auto">
          <TextField
            id="outlined-name"
            label="Initiator"
            name="initiator"
            value={state.initiator}
            onChange={handleChange}
            error={touched.initiator && state.initiator === ""}
            onFocus={() => setTouched({ ...touched, initiator: true })}
            InputProps={{ inputProps: { minLength: 1, maxLength: 10 } }}
            required
            sx={{ width: "15em" }}
          />
        </Grid>

        <Grid item xs={12} md="auto">
          <TextField
            name="shop"
            select
            label="Select Shop"
            value={state.shop}
            onChange={handleChange}
            error={touched.shop && state.shop === ""}
            onFocus={() => setTouched({ ...touched, shop: true })}
            required
            sx={{ width: "15em" }}
          >
            {shopOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md="auto">
          <OrderDateTimePicker
            name="orderDeadline"
            value={state.orderDeadline}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md="auto">
          <Button
            sx={{
              width: "16em",
              p: 1.5,
              bgcolor: "#ABC270",
              ":hover": { bgcolor: "#4E6C50" },
            }}
            type="submit"
            size="large"
            variant="contained"
          >
            create order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { CreateOrder })(OrderForm);
