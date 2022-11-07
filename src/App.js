import { useState } from "react";
import axios from "axios";
import "./App.css";
import Image from "./components/Image";
import Gallery from "./components/Gallery";

const url = "http://contest.elecard.ru/frontend_data/catalog.json";

function App() {
  const [images, setImages] = useState([]);
  axios
    .get(url)
    .then((response) => {
      setImages(response.data);
    })
    .catch((error) => {
      console.log(`Error in parsing json - ${error.message}`);
    });

  return (
    <div className="App">
      <Gallery images={images} />
    </div>
  );
}

export default App;
