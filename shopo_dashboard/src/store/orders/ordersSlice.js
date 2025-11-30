import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      allOrders: [],       // All fetched orders
      filtered: [],        // After filtering (by status/search)
      sorted: [],          // Final sorted + filtered orders
};

const ordersSlice = createSlice({
      name: "orders",
      initialState,
      reducers: {
            setOrders: (state, action) => {
                  state.allOrders = action.payload;
                  state.filtered = action.payload;
                  state.sorted = action.payload;
            },

            filterByStatus: (state, action) => {
                  const status = action.payload;
                  state.filtered = state.allOrders.filter((o) => o.status === status);
                  state.sorted = [...state.filtered]; // reset sort
            },

            applySearch: (state, action) => {
                  const { type, value } = action.payload;
                  state.filtered = state.filtered.filter((o) =>
                        o[type]?.toLowerCase().includes(value.toLowerCase())
                  );
                  state.sorted = [...state.filtered];
            }
      },
});

export const {
      setOrders,
      filterByStatus,
      applySearch,
      sortOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer;
