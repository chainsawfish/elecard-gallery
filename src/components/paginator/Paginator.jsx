import React, {useContext, useMemo} from "react";
import Pagination from "react-responsive-pagination";
import "bootstrap/dist/css/bootstrap.css";
import {AppContext} from "../../App";

const Paginator = ({currentPage, totalPages}) => {
    const {handlePageChange} = useContext(AppContext);
    const paginator = useMemo(()=>{
        return (<Pagination
            current={currentPage}
            total={totalPages}
            onPageChange={(page) =>
                handlePageChange(page)
            }
            a11yActiveLabel=""
        />)
    },[currentPage, totalPages, handlePageChange])

    return (
        <footer>
            {paginator}
        </footer>
    );
};

export default Paginator;
