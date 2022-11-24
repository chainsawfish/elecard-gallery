import {createContext, useEffect, useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import {LinearProgress} from "@mui/material";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";
import TreeView from "./components/TreeView";
import Paginator from "./components/Paginator";
import {sorting} from "./module/sorting";

export const AppContext = createContext(null);

function App() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [galleryView, setGalleryView] = useState(true);
    const [isReset, setIsReset] = useState(false)

    // количество изображений на одну страницу для пагинации
    const numberOfImagesOnPage = 29;

    const calculateTotalPages = (arrayOfImages) => Math.ceil(arrayOfImages.length / numberOfImagesOnPage);
    // получение данных
    useEffect(() => {
        axios
            .get(constants.JSON_URL)
            .then((response) => {
                setImages(response.data);
                setTotalPages(calculateTotalPages([...response.data]))
            })
            .catch((error) => {
                console.log(`Error in parsing json - ${error.message}`);
            })
            .finally(() => setIsLoading(false));
    }, [currentPage, isReset]);


    // сортировка, функции находятся в отдельном файле, саму сортировку не отрефакторил в отдельный файл, каюсь
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
        setTotalPages(calculateTotalPages(images))
        setCurrentPage(currentPage)
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
                    totalPages,
                    images,
                    setImages, numberOfImagesOnPage
                }}
            >
                <Header resetHandler={resetHandler}/>
                {isLoading ? <LinearProgress/> : <></>}
                {galleryView ? (
                    <>
                        <Paginator images={images} total={totalPages}/>
                        <Gallery images={images}/>

                    </>
                ) : (
                    <TreeView images={images}/>
                )}
            </AppContext.Provider>
        </div>
    );
}

export default App;
