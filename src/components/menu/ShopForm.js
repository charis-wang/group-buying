import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";
import { EditShop } from "../../actions/shop";

const shopTypes = [
  { value: "boxedMeal", label: "便當" },
  { value: "beverage", label: "飲料" },
  { value: "vegan", label: "蔬食" },
  { value: "fastFood", label: "速食" },
];

const ShopForm = (props) => {
  const shop = useSelector((state) => state.shop);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => setReadOnly(props.display !== "shop"), [props.display]);

  const onSubmit = (e) => {
    props.setDisplay("menu");
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.EditShop({ [name]: value });
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { minWidth: "20ch" },
      }}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12}>
          <TextField
            name="shopName"
            label="Shop Name"
            variant="outlined"
            onChange={handleChange}
            required
            error={!shop.shopName}
            disabled={readOnly}
            value={shop.shopName}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="shopType"
            select
            label="Select Type of Shop"
            onChange={handleChange}
            error={!shop.shopType}
            value={shop.shopType}
            required
            style={{ minWidth: "19.5ch" }}
            disabled={readOnly}
          >
            {shopTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="tel"
            name="shopPhoneNumber"
            label="Phone Number"
            variant="outlined"
            onChange={handleChange}
            error={!shop.shopPhoneNumber.match(/^0[0-9]{1}-[0-9]{7,8}$/)}
            placeholder="02-12345678"
            value={shop.shopPhoneNumber}
            required
            disabled={readOnly}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="shopAddress"
            label="Address"
            variant="outlined"
            onChange={handleChange}
            error={!shop.shopAddress}
            required
            disabled={readOnly}
            value={shop.shopAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="shopInfo"
            label="Info"
            variant="outlined"
            placeholder="other info"
            multiline
            rows={3}
            onChange={handleChange}
            disabled={readOnly}
            value={shop.shopInfo}
          />
        </Grid>
        <Grid item xs={12} mx={5}>
          <Button type="submit" variant="outlined" disabled={readOnly}>
            NEXT STEP
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { EditShop })(ShopForm);
