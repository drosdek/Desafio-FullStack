import { createSlice } from "@reduxjs/toolkit";
import Nivel from "../../models/nivel.model";

const initialState = { value: Nivel() };

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
