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

const typeImageSource = {
  vegan: "vegan-food.jpeg",
  fastFood: "fast-food.jpeg",
  boxedMeal: "boxed-meal.jpeg",
  beverage: "bubble-tea.jpeg",
};

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
            <Card sx={{ maxWidth: 200 }} key={shop.value}>
              <CardActionArea href={`/menu/${shop.value}`}>
                <CardMedia
                  height="140"
                  component="img"
                  image={typeImageSource[shop.type]}
                />
                <CardContent>
                  <Typography>
                    {shop.label}
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
