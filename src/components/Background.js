import React, { Fragment } from "react";
import { Typography, Paper } from "@mui/material";
import "./index.css";
const Image =
  "https://res.cloudinary.com/dzufwjonc/image/upload/v1675419632/Group%20Buying/img/ella-olsson-oPBjWBCcAEo-unsplash_ioulr3.jpg";

const BackgroundImagePage = (props) => {
  return (
    <Fragment>
      <Paper className="bg">
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
