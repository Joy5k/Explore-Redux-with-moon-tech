import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import logger from "redux-logger";
import productSlice from "../features/products/products";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        products:productSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store;