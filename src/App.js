import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-responsive-pagination";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get(constants.JSON_URL)
      .then((response) => {
        setImages(response.data);
        setTotalPages(Number(images.length / 20));
      })
      .catch((error) => {
        console.log(`Error in parsing json - ${error.message}`);
      });
  }, [images.length]);

  const sortHandler = (sortType) => {
    let sortedArray = [...images];
    switch (sortType) {
      case "name":
        sortedArray.sort((a, b) => {
          let name1 = a.image.split("/").pop();
          let name2 = b.image.split("/").pop();
          return ("" + name1).localeCompare(name2);
        });
        break;
      case "fileSize":
        sortedArray.sort((a, b) => a.filesize - b.filesize);
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
        break;
      case "date":
        sortedArray.sort((a, b) => a.timestamp - b.timestamp);
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
  const deleteHandler = (img = "") => {
    localStorage.setItem(img, "hidden");
    setImages(images.filter((el) => el.image !== img));
  };

  return (
    <div className="App">
      <Header sortHandler={sortHandler} deleteHandler={deleteHandler} />
      <div className="gallery">
        <Gallery
          images={images.filter((_, ind) => {
            return ind >= (currentPage - 1) * 20 && ind <= currentPage * 20;
          })}
          deleteHandler={deleteHandler}
        />
      </div>
      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
}

export default App;
