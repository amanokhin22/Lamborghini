export type PaginationPropsType = {
    currentPage: number,
    onChangePage: (page: number) => void;
    pagesCount: number;
}

export interface NewsList {
    id: string;
    rating: number;
    image: string;
    title: string;
    content: string;
}

export interface NewsSliceState {
    news: NewsList[];
    loading: boolean;
    activeNewsId: string;
    pageSize: number;
    page: number;
}

export interface ModelsList {
    id: string;
    selectTitle: string;
    image: string;
    title: string;
    content: string;
}

export interface LamboSliceState {
    models: ModelsList[];
    loading: boolean;
    activeModelsId: string;
    pageSize: number;
    page: number;
}


export interface ModalState {
    isOpened: boolean;
    lamboId?: number;

}

