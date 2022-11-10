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
import { sorting } from "./module/sorting";

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
        sortedArray.sort(sorting.name);
        break;
      case "fileSize":
        sortedArray.sort(sorting.fileSize);
        break;
      case "category":
        sortedArray.sort(sorting.category);
        break;
      case "date":
        sortedArray.sort(sorting.date);
        break;
      default:
        sortedArray.sort(sorting.name);
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
