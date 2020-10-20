import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {PaletteProvider} from "./context/PaletteContext";
import ColorPicker from "./components/ColorPicker";

function App() {
  return(
    <Router>
      <PaletteProvider>
        <Route path="/" component={ColorPicker} />
      </PaletteProvider>
    </Router>
  )
}

export default App;


