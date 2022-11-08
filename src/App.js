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
          let name1 = a.image.split("/").pop();
          let name2 = b.image.split("/").pop();
          return ("" + name1).localeCompare(name2);
        });
        console.log("sorted by name");
        break;
      case "fileSize":
        sortedArray.sort((a, b) => a.filesize - b.filesize);
        console.log("sorted by filesize");
        break;
      case "category":
        sortedArray.sort((a, b) => {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
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
        sortedArray.sort((a, b) => {
          let name1 = a.image.split("/").pop();
          let name2 = b.image.split("/").pop();
          if (name1.image < name2.image) return -1;
          if (name1.image > name2.image) return 1;
          return 0;
        });
        break;
    }
    setImages(sortedArray);
  };
  const deleteHandler = (img) => {
    localStorage.setItem(img, "hidden");
    setImages(images.filter((el) => el.image !== img));
  };

  return (
    <div className="App">
      <Header sortHandler={sortHandler} />
      <div className="gallery">
        <Gallery images={images} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
}

export default App;
