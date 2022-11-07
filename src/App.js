import { useState } from "react";
import axios from "axios";
import "./App.css";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import constants from "./module/constants";

function App() {
  const [images, setImages] = useState([]);

  localStorage.setItem("animals/animals-2939726__480.jpg", "hidden");
  localStorage.setItem("animals/baby-monkey-4888534__480.jpg", "hidden");
  localStorage.setItem(
    "animals/australian-shepherd-5902417__480.jpg",
    "hidden"
  );

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
      <div className="gallery">
        <Gallery className="gallery" images={images} />
      </div>
    </div>
  );
}

export default App;
