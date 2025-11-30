// src/store/inventory/inventorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      products: [],
      edited: [],
      sorted: [],
      changedCount: 0,
      isEdited: false,
      search: "",
      status: "all",
      sort: "",
};

const inventorySlice = createSlice({
      name: "inventory",
      initialState,
      reducers: {
            setProducts: (state, action) => {
                  state.products = action.payload;
                  state.edited = [...action.payload];
                  state.sorted = [...action.payload];
                  state.changedCount = 0;
                  state.isEdited = false;
            },
            editProduct: (state, action) => {
                  const { id, field, value } = action.payload;
                  const prodIndex = state.edited.findIndex((p) => p.id === id);
                  if (prodIndex !== -1) {
                        state.edited[prodIndex][field] = value;

                        const original = state.products.find((p) => p.id === id);
                        const edited = state.edited[prodIndex];
                        const hasChanged =
                              original.price !== edited.price || original.stock !== edited.stock;

                        state.changedCount = state.edited.filter((ep) => {
                              const op = state.products.find((p) => p.id === ep.id);
                              return op && (op.price !== ep.price || op.stock !== ep.stock);
                        }).length;
                        state.isEdited = state.changedCount > 0;
                  }
            },
            saveChanges: (state) => {
                  state.products = [...state.edited];
                  state.sorted = [...state.edited];
                  state.changedCount = 0;
                  state.isEdited = false;
            },
            cancelChanges: (state) => {
                  state.edited = [...state.products];
                  state.sorted = [...state.products];
                  state.changedCount = 0;
                  state.isEdited = false;
            },
            deleteProduct: (state, action) => {
                  const id = action.payload;
                  state.edited = state.edited.filter((p) => p.id !== id);
                  state.sorted = state.sorted.filter((p) => p.id !== id);
            },
            copyProduct: (state, action) => {
                  const product = action.payload;
                  const newProduct = {
                        ...product,
                        id: Date.now(),
                        sku: `${product.sku}-COPY`,
                        name: `${product.name} (Copy)`,
                  };
                  state.edited.push(newProduct);
                  state.sorted.push(newProduct);
            },
            applyFiltersAndSort: (state, action) => {
                  const { search, status, sort } = action.payload;
                  state.search = search;
                  state.status = status;
                  state.sort = sort;

                  state.sorted = state.edited
                        .filter((product) =>
                              product.sku.toLowerCase().includes(search.toLowerCase())
                        )
                        .filter((product) =>
                              status === "all"
                                    ? true
                                    : product.status.toLowerCase() === status.toLowerCase()
                        )
                        .sort((a, b) => {
                              if (sort === "priceLowHigh") return a.price - b.price;
                              if (sort === "priceHighLow") return b.price - a.price;
                              if (sort === "stockHighLow") return b.stock - a.stock;
                              return 0;
                        });
            },
      },
});

export const {
      setProducts,
      editProduct,
      saveChanges,
      cancelChanges,
      deleteProduct,
      copyProduct,
      applyFiltersAndSort,
} = inventorySlice.actions;

export default inventorySlice.reducer;