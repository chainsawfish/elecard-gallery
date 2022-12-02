import React, {createContext, useState, Suspense} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {LinearProgress} from "@mui/material";
import "./App.css";
import constants from "./data/constants";
import Header from "./components/Header";
import Paginator from "./components/Paginator";
import {sortingSwitch} from "./utils/sorting";
import useFetchImages from "./hooks/useFetchImages";
// lazy components
const Gallery = React.lazy(() => import("./components/Gallery")),
    TreeView = React.lazy(() => import("./components/TreeView"));
export const AppContext = createContext(null);

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [galleryView, setGalleryView] = useState(true);
    const {
        images,
        setImages,
        totalPages,
        setTotalPages,
        allImagesArray
    } = useFetchImages(constants.JSON_URL)

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
        //setIsReset(!isReset)
        setImages(allImagesArray)
        setTotalPages(totalPages)
    }
    const clickDisableHandler = (value) => {
        return constants.notClickable(value)
    }
    const storeValues = {
        deleteHandler,
        sortHandler,
        viewHandler,
        handlePageChange,
        clickDisableHandler,
        currentPage,
        setCurrentPage,
        images
    }
    return (
        <div className="App">
            <AppContext.Provider value={storeValues}>
                <Header resetHandler={resetHandler} currentView={galleryView}/>
                <Suspense fallback={<LinearProgress/>}>
                    <div style={constants.changeDisplayStyle(galleryView)}>
                        <Paginator images={images} totalPages={totalPages} currentPage={currentPage}/>
                        <Gallery images={images}/>
                    </div>
                    <div style={constants.changeDisplayStyle(!galleryView)}><TreeView images={allImagesArray}/></div>
                </Suspense>
            </AppContext.Provider>
        </div>
    );
}

export default App;
