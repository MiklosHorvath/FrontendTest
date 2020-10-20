import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

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

function App() {
  return (
    <div className="App">
      <button onClick={HandleClickFetchColors}>FetchColors</button>
    </div>
  );
}

export default App;
