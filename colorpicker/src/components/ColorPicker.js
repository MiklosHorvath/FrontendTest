import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Palette from "./Palette";
import PaletteContext from "../context/PaletteContext";

const ColorPicker = () => {
  const { palettes } = useContext(PaletteContext);  
  return (
    <div className="App">
      
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>            
            { 
            palettes.map((value, key) => (
              
              <Grid key={key} item>
                <Palette paletteInfo={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ColorPicker;
