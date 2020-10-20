import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Palette from "./components/Palette"

const HandleClickFetchColors = () => {
  console.log("start fetching");
  const options = {
    url: "https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/new?numResults=8&format=json",
    method: "GET",
    headers: {
      "Content-Type": "application/json",      
    }
  }
    axios(options).then((resp) => {
      console.log("response:");
      console.log(resp);      
    });
}

const arraySplitter =(original, innerArraySize) => {
  const originalSize = original.length;
  let result = [];
  let index = 0;  
  while (index < originalSize) {
    result.push(original.slice(index, index += innerArraySize));
  }
  return result;
}


function App() {
  let paletteData = [0,1,2,3,4,5,6,7,8,9];  
  return (
    <div className="App">
      <button onClick={HandleClickFetchColors}>FetchColors</button>                
          <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={4}>
              {paletteData.map((value) => (
                <Grid key={value} item>
                  <Palette locationNumber = {value}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          </Grid>             
    </div>
  );
}

export default App;


