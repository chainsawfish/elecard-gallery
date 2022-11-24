import {createContext, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {LinearProgress} from "@mui/material";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";
import TreeView from "./components/TreeView";
import Paginator from "./components/Paginator";
import {sorting} from "./module/sorting";
import useFetchImages from "./hooks/useFetchImages";

export const AppContext = createContext(null);

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [galleryView, setGalleryView] = useState(true);
    const [isReset, setIsReset] = useState(false)
    const {images, setImages, isLoading, totalPages, setTotalPages, allImagesArray } = useFetchImages(constants.JSON_URL, isReset, currentPage)


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
                sortedArray.sort(sorting.name)
                break;
        }
        setImages(sortedArray);
    };

    const handlePageChange = (page = 1) => {
        setCurrentPage(page);
    };
    // удаление выбранного изображения
    const deleteHandler = (img = "") => {
        setImages(images.filter((el) => el.image !== img));
        localStorage.setItem(img, "hidden");
        setTotalPages(totalPages)
        //setCurrentPage(currentPage)
    };

    // переключение вида на дерево и обратно
    const viewHandler = (value) => {
        value === "standartView" ? setGalleryView(true) : setGalleryView(false);
    };
    const resetHandler = () => {
       setIsReset(!isReset)
    }
    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    deleteHandler,
                    sortHandler,
                    viewHandler,
                    handlePageChange,
                    currentPage,
                    setCurrentPage,
                    images,
                }}
            >
                <Header resetHandler={resetHandler}/>
                {isLoading ? <LinearProgress/> : <></>}
                {galleryView ? (
                    <>
                        <Paginator images={images} totalPages={totalPages} currentPage={currentPage}/>
                        <Gallery images={images}/>

                    </>
                ) : (
                    <TreeView images={allImagesArray}/>
                )}
            </AppContext.Provider>
        </div>
    );
}

export default App;
