import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";

const MenuGallery = () => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent={{ xs: "center", sm: "flex-start", md: "flex-start" }}
    >
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea href="/">
            <CardMedia
              width="140"
              height="140"
              component="img"
              image="http://localhost:3000/background-image.jpeg"
            />

            <CardContent>
              <Typography
                sx={{ color: "#8d6e63", "&:hover": { color: "black" } }}
              >
                milkshop
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea href="/">
            <CardMedia
              width="140"
              height="140"
              component="img"
              image="http://localhost:3000/background-image.jpeg"
            />

            <CardContent>
              <Typography
                sx={{ color: "#8d6e63", "&:hover": { color: "black" } }}
              >
                milkshop
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MenuGallery;
