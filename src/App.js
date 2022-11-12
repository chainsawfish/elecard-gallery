import { createContext, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { LinearProgress } from "@mui/material";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";
import TreeView from "./components/TreeView";
import Paginator from "./components/Paginator";
import { sorting } from "./module/sorting";
export const AppContext = createContext();

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryView, setGalleryView] = useState(true);

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
  const imagesOnCurrentPage = (value) => {
    return images.filter((_, ind) => {
      return ind >= (currentPage - 1) * 20 && ind <= currentPage * 20;
    });
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          deleteHandler,
          sortHandler,
          viewHandler,
          currentPage,
          setCurrentPage,
          totalPages,
          images,
          setImages,
        }}
      >
        <Header />
        {isLoading ? <LinearProgress /> : <></>}
        {galleryView ? (
          <>
            <Gallery
              images={imagesOnCurrentPage(images)}
              deleteHandler={deleteHandler}
            />

            <Paginator />
          </>
        ) : (
          <TreeView images={images} deleteHandler={deleteHandler} />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
