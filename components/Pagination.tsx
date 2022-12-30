import React, {FC} from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/news.module.scss";
import {PaginationPropsType} from "../types/types";

export const Pagination: FC<PaginationPropsType> = ({currentPage, onChangePage, pagesCount}) => {

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={pagesCount}
            forcePage={currentPage - 1}
        />
    )
};
