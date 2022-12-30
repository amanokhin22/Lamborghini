import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LamboSliceState} from "../types/types";
import {fetchModels} from "./asyncThunkNews";


const initialState: LamboSliceState = {
    models: [],
    loading: false,
    activeModelsId: "",
    pageSize: 3,
    page: 1,
};

const lamboSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setActiveModelsId(state, action: PayloadAction<string>) {
            state.activeModelsId = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchModels.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchModels.fulfilled, (state, action) => {
            state.models = action.payload;
            state.loading = false;
        });
    },
})

export const {setActiveModelsId, setPage} = lamboSlice.actions;

export default lamboSlice.reducer;
