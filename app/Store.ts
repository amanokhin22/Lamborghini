import {configureStore} from "@reduxjs/toolkit";
import newsSliceReducer from "../redux/newsSlice";
import modelsSliceReducer from "../redux/lamboSlice";

export const store = configureStore({
    reducer: {
        news: newsSliceReducer,
        models: modelsSliceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
