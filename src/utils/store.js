import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./reducers.js";


const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    }
})

export default store;