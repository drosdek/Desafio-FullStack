import { createSlice } from "@reduxjs/toolkit";

function initializeState() {
  const initialState = { keys: {}, values: [] };
  return initialState;
}

export const desenvolvedorSlice = createSlice({
  name: "desenvolvedor",
  initialState: initializeState(),
  reducers: {
    set: (state, { payload }) => {
      state.value = payload;
    }
  }
});

export const { set } = desenvolvedorSlice.actions;

export default desenvolvedorSlice.reducer;
