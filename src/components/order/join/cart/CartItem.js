import { React } from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const CartItem = (props) => {
  const { item } = props;

  const updateAmount = (delta) => {
    props.updateAmount(item.id, delta);
  };

  if (item.amount <= 0) return;

  return (
    <Box>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Typography component={"span"}>
            {item.itemName} <br />
            {item.orderDetail
              ? `(${item.orderDetail} $${item.extraCost})`
              : null}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Button
            onClick={() => (item.amount - 1 >= 0 ? updateAmount(-1) : null)}
          >
            -
          </Button>
          <span>{item.amount}</span>
          <Button onClick={() => updateAmount(1)}>+</Button>
        </Grid>
        <Grid item xs={2}>
          <Typography component={"span"}>
            $ {(item.price + item.extraCost) * item.amount}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => updateAmount(-item.amount)}>
            <DeleteOutlineOutlinedIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
