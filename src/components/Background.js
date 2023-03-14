import React, { Fragment } from "react";
import { Typography, Paper } from "@mui/material";

const BackgroundImagePage = (props) => {
  return (
    <Fragment>
      <Paper variant="background">
        <Typography
          variant="h4"
          pl={2}
          pb={1.5}
          sx={{
            display: "flex",
            alignItems: "end",
            color: "white",
            height: "100%",
            textShadow: "0.1em 0.1em 0.2em black",
          }}
        >
          {props.title}
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default BackgroundImagePage;
