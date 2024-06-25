import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        //...user
    }
})

export default store;