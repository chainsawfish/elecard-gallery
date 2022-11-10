import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-responsive-pagination";
import "bootstrap/dist/css/bootstrap.css";
import { LinearProgress } from "@mui/material";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";
import TreeView from "./components/TreeView";

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryView, setGalleryView] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // получение данных
  useEffect(() => {
    axios
      .get(constants.JSON_URL)
      .then((response) => {
        setImages(response.data);
        setTotalPages(Number(images.length / 20));
      })
      .catch((error) => {
        console.log(`Error in parsing json - ${error.message}`);
      })
      .finally(() => setTimeout(() => setIsLoading(false), 2000));
  }, [images.length]);

  // сортировка
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

  // удаление выбранного изображения
  const deleteHandler = (img = "") => {
    localStorage.setItem(img, "hidden");
    setImages(images.filter((el) => el.image !== img));
  };

  // переключение вида
  const viewHandler = (value) => {
    value === "standartView" ? setGalleryView(true) : setGalleryView(false);
  };

  return (
    <div className="App">
      <Header
        sortHandler={sortHandler}
        deleteHandler={deleteHandler}
        viewHandler={viewHandler}
      />
      {isLoading ? <LinearProgress /> : <></>}
      {galleryView ? (
        <div className="gallery">
          <Gallery
            images={images.filter((_, ind) => {
              return ind >= (currentPage - 1) * 20 && ind <= currentPage * 20;
            })}
            deleteHandler={deleteHandler}
          />
          <footer>
            <Pagination
              current={currentPage}
              total={totalPages}
              onPageChange={(page) => handlePageChange(page)}
            />
          </footer>
        </div>
      ) : (
        <div className="treeView">
          <TreeView images={images} deleteHandler={deleteHandler} />
        </div>
      )}
    </div>
  );
}

export default App;
