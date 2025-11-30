// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice";
import ordersReducer from "../store/orders/ordersSlice";
import productsReducer from "../store/products/productsSlice";
import inventoryReducer from "../store/inventory/inventorySlice";
import usersReducer from "../store/users/usersSlice";
import uiReducer from "../store/ui/uiSlice";

const store = configureStore({
      reducer: {
            auth: authReducer,
            orders: ordersReducer,
            products: productsReducer,
            inventory: inventoryReducer,
            users: usersReducer,
            ui: uiReducer,
      },
});

export default store;
