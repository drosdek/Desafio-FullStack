import { createSlice } from "@reduxjs/toolkit";

const initialState = { keys: [], values: [] };

export const nivelSlice = createSlice({
  name: "desenvolvedor",
  initialState,
  reducers: {
    set: (state, { payload }) => {
      state.value = payload;
    }
  }
});

export const { set } = nivelSlice.actions;

export default nivelSlice.reducer;
