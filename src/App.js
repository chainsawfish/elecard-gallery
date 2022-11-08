import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(constants.JSON_URL)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(`Error in parsing json - ${error.message}`);
      });
  }, []);

  const sortHandler = (sortType) => {
    let sortedArray = [...images];
    switch (sortType) {
      case "name":
        sortedArray.sort((a, b) => {
          if (a.image > b.image) {
            return -1;
          }
          if (a.image < b.image) {
            return 1;
          }
          return 0;
        });
        console.log("sorted by name");
        break;
      case "fileSize":
        sortedArray.sort((a, b) => a.filesize - b.filesize);
        console.log("sorted by filesize");
        break;
      case "category":
        sortedArray.sort((a, b) => {
          if (a.category > b.category) {
            return -1;
          }
          if (a.category < b.category) {
            return 1;
          }
          return 0;
        });
        console.log("sorted by cat");
        break;
      case "date":
        sortedArray.sort((a, b) => a.timestamp - b.timestamp);
        console.log("sorted by date");
        break;
      default:
        break;
    }
    setImages(sortedArray);
  };

  return (
    <div className="App">
      <Header sortHandler={sortHandler} />
      <div className="gallery">
        <Gallery images={images} />
      </div>
    </div>
  );
}

export default App;
