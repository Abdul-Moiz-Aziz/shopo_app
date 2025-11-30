// src/store/products/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      list: [],
};

const productsSlice = createSlice({
      name: "products",
      initialState,
      reducers: {
            setProducts: (state, action) => {
                  state.list = action.payload;
            },
            updatePrice: (state, action) => {
                  const { productId, newPrice } = action.payload;
                  const product = state.list.find((p) => p.id === productId);
                  if (product) product.price = newPrice;
            },
            addProduct: (state, action) => {
                  state.list.push(action.payload);
            },
      },
});

export const { setProducts, updatePrice, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
