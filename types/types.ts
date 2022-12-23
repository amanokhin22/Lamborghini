export type PaginationPropsType = {
    currentPage: number,
    onChangePage: (page: number) => void;
    pagesCount: number;
}