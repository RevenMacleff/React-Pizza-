import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
/* npm i react-paginate устанавливаем*/
const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
    ></ReactPaginate>
  );
};

export default Pagination;
