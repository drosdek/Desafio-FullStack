import { createSlice } from "@reduxjs/toolkit";
import Desenvolvedor from "../../models/desenvolvedor.model";

const initialState = { value: new Desenvolvedor() };

export const desenvolvedorSlice = createSlice({
  name: "desenvolvedor",
  initialState,
  reducers: {
    set: (state, { payload }) => {
      state.value = payload;
    }
  }
});

export const { set } = desenvolvedorSlice.actions;

export default desenvolvedorSlice.reducer;
