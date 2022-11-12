import React, { useContext } from "react";
import Pagination from "react-responsive-pagination";
import "bootstrap/dist/css/bootstrap.css";
import { AppContext } from "../App";

const Paginator = () => {
  const { currentPage, totalPages, setCurrentPage } = useContext(AppContext);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <footer>
      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={(page) => handlePageChange(page)}
      />
    </footer>
  );
};

export default Paginator;
