import { Fragment, React, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";

import { fetchShopOptions } from "../../apis/shop";

const ShopCard = (props) => {
  const [shopOptions, setShopOptions] = useState([]);

  useEffect(() => {
    fetchShopOptions().then((res) => setShopOptions(res.data));
  }, []);

  return (
    <Fragment>
      {shopOptions
        .filter(
          (shop) => props.selected === "all" || shop.type === props.selected
        )
        .map((shop) => (
          <Grid item key={shop.value}>
            <Card sx={{ maxWidth: 345 }} key={shop.value}>
              <CardActionArea href={`/menu/${shop.value}`}>
                <CardMedia
                  width="140"
                  height="140"
                  component="img"
                  image={
                    // shop.type === "beverage" ? "background-image.jpeg" : null
                    "background-image.jpeg"
                  }
                />
                <CardContent>
                  <Typography
                    sx={{
                      color: "#8d6e63",
                      opacity: "0.8",
                      "&:hover": { color: "black", opacity: 1 },
                    }}
                  >
                    {shop.type + "/" + shop.label}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Fragment>
  );
};

export default ShopCard;
