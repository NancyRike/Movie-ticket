import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { baseApi } from "../api/baseapi";

export const store = configureStore({
    reducer:{
        api: baseApi.reducer,
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);