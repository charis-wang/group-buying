import { React } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Navbar from "../components/Navbar";
import BackgroundImagePage from "../components/Background";

const NotFoundPage = () => {
  return (
    <Box>
      <Navbar />
      <BackgroundImagePage title="404 - Page not found" />
      <Grid justifyContent="center" container spacing={2} my={2}>
        <Grid item xs={9} md={9} mb={3}>
          <Button onClick={() => window.history.back()}>
            <ArrowBackIosIcon fontSize="small" />
            back to previous page
          </Button>
        </Grid>
        <Grid item xs={9} md={9} mb={3}>
          <Typography variant="h3">
            Sorry, <br /> we couldn't find the page!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFoundPage;
