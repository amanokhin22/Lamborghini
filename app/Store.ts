import {configureStore} from "@reduxjs/toolkit";
import newsSliceReducer from "../redux/newsSlice";
import modelsSliceReducer from "../redux/lamboSlice";
import modalSliceReducer from "../redux/modalSlice";

export const store = configureStore({
    reducer: {
        news: newsSliceReducer,
        models: modelsSliceReducer,
        modal: modalSliceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
