import { useState } from "react";
import "./App.css";
import Image from "./components/Image";
import Gallery from "./components/Gallery";

const axios = require("axios").default;

function App() {
  return (
    <div className="App">
      <Image />
    </div>
  );
}

export default App;
