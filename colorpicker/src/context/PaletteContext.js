import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const options = {
  url:
    "https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/new?numResults=10&format=json",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
export const PaletteContext = createContext();
export const PaletteProvider = (props) => {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        axios(options).then((resp) => {
            setPalettes(resp.data);
          });
    }, []);

    return (
        <PaletteContext.Provider value={{setPalettes, palettes}}>
            {props.children}
        </PaletteContext.Provider>
    );
};

export default PaletteContext;
