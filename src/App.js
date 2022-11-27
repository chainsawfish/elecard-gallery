import React, {createContext, useState, Suspense} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {LinearProgress} from "@mui/material";
import "./App.css";
import constants from "./module/constants";
import Header from "./components/Header";
import Paginator from "./components/Paginator";
import {sortingSwitch} from "./module/sorting";
import useFetchImages from "./hooks/useFetchImages";
// lazy components
const Gallery = React.lazy(() => import("./components/Gallery"))
const TreeView = React.lazy(() => import("./components/TreeView"))

export const AppContext = createContext(null);

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [galleryView, setGalleryView] = useState(true);
    const [isReset, setIsReset] = useState(false)
    const {
        images,
        setImages,
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
    const storeValues = {deleteHandler,
        sortHandler,
        viewHandler,
        handlePageChange,
        currentPage,
        setCurrentPage,
        images}
    return (
        <div className="App">
            <AppContext.Provider value={storeValues}>
                <Header resetHandler={resetHandler}/>
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
