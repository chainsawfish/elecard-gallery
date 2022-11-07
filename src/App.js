import { useState } from "react";
import axios from "axios";
import "./App.css";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";

function App() {
  const [images, setImages] = useState([]);

  axios
    .get(constants.JSON_URL)
    .then((response) => {
      setImages(response.data);
    })
    .catch((error) => {
      console.log(`Error in parsing json - ${error.message}`);
    });

  return (
    <div className="App">
      <Header />
      <div className="gallery">
        <Gallery images={images} />
      </div>
    </div>
  );
}

export default App;
