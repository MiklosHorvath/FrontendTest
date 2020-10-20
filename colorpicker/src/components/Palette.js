import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
  mainBox: {
    width: "80vw",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
    flexDirection: "row",
    width: "40vw"
    }
  },
}));

const Palette = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex"  className={classes.mainBox}>
        <Box display="flex" flexDirection="column">
          <Box bgcolor="error.main" color="error.contrastText" p={2}>
            {props.paletteInfo.title}
          </Box>

          <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
            by {props.paletteInfo.userName} at {props.paletteInfo.dateCreated}
          </Box>

          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            views {props.paletteInfo.numViews} votes{" "}
            {props.paletteInfo.numVotes}
          </Box>
        </Box>
        <Box p={3}>
          <img src={props.paletteInfo.imageUrl} alt="palette image place"></img>
        </Box>
      </Box>
    </div>
  );
};

export default Palette;
