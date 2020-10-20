import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Palette = (props) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={12}>
            <Box bgcolor="error.main" color="error.contrastText" p={2}>
            {props.paletteInfo.title}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
            by {props.paletteInfo.userName} at {props.paletteInfo.dateCreated}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box bgcolor="info.main" color="info.contrastText" p={2}>
            views {props.paletteInfo.numViews} votes {props.paletteInfo.numVotes}
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Box p={3}>
            <img
              src={props.paletteInfo.imageUrl}
              alt="palette image place"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Palette;
