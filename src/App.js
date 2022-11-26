import {createContext, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {LinearProgress} from "@mui/material";
import "./App.css";
import Gallery from "./components/Gallery";
import constants from "./module/constants";
import Header from "./components/Header";
import TreeView from "./components/TreeView";
import Paginator from "./components/Paginator";
import { sortingSwitch} from "./module/sorting";
import useFetchImages from "./hooks/useFetchImages";

export const AppContext = createContext(null);

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [galleryView, setGalleryView] = useState(true);
    const [isReset, setIsReset] = useState(false)
    const {
        images,
        setImages,
        isLoading,
        totalPages,
        setTotalPages,
        allImagesArray
    } = useFetchImages(constants.JSON_URL, isReset)

    const sortHandler = (sortType) => {
        setImages(sortingSwitch(sortType, images));
    };

    const handlePageChange = (page = 1) => {
        setCurrentPage(page);
    };

    const deleteHandler = (img) => {
        const n = constants.numberOfImagesOnPage
        setImages(images.filter((el) => el.image !== img));
        localStorage.setItem(img, "hidden");
        if (images.length + n <= totalPages * n + (totalPages * n % n) + 1) {
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
            setTotalPages(totalPages - 1)
        }
    };

    const viewHandler = (value) => {
        value === "standartView" ? setGalleryView(true) : setGalleryView(false);
    };

    const resetHandler = () => {
        setIsReset(!isReset)
        setTotalPages(totalPages)
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
