import React, {useContext} from "react";
import Pagination from "react-responsive-pagination";
import "bootstrap/dist/css/bootstrap.css";
import {AppContext} from "../App";

const Paginator = ({images}) => {
    const {currentPage, handlePageChange, numberOfImagesOnPage} = useContext(AppContext);

    const totalPages = Math.ceil(images.length/numberOfImagesOnPage)
    return (
        <footer>
            <Pagination
                current={currentPage}
                total={totalPages}
                onPageChange={(page) =>
                    handlePageChange(page)
                }
                a11yActiveLabel=""
            />
        </footer>
    );
};

export default Paginator;
