import { createSlice } from "@reduxjs/toolkit";

function initializeState() {
  const initialState = { isOpen: true };
  return initialState;
}

export const menuSlice = createSlice({
  name: "menu",
  initialState: initializeState(),
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
