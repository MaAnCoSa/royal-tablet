import { configureStore } from "@reduxjs/toolkit";
import combsReducer from "./combsSlice";

export const store = configureStore({
    reducer: {
        combList: combsReducer
    }
})