// src/store/ui/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      sidebarOpen: true,
      modalOpen: false,
};

const uiSlice = createSlice({
      name: "ui",
      initialState,
      reducers: {
            toggleSidebar: (state) => {
                  state.sidebarOpen = !state.sidebarOpen;
            },
            openModal: (state) => {
                  state.modalOpen = true;
            },
            closeModal: (state) => {
                  state.modalOpen = false;
            },
      },
});

export const { toggleSidebar, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
