import {createAsyncThunk} from "@reduxjs/toolkit";
import {modelsApi, newsApi} from "../api/newsApi";

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        return await newsApi.getAll()
    }
);

export const fetchModels = createAsyncThunk(
    'models/fetchModels',
    async () => {
        return await modelsApi.getAll()
    }
);
