import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsSliceState} from "../types/types";
import {fetchNews} from "./asyncThunk";

const initialState: NewsSliceState = {
    news: [],
    loading: false,
    activeNewsId: "",
    pageSize: 3,
    page: 1,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setActiveNewsId(state, action: PayloadAction<string>) {
            state.activeNewsId = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.loading = false;
        });
    },
})

export const {setActiveNewsId, setPage} = newsSlice.actions;

export default newsSlice.reducer;
