import { configureStore } from "@reduxjs/toolkit";
import desenvolvedorReducer from "./features/desenvolvedor/desenvolvedorSlice";
import nivelReducer from "./features/nivel/nivelSlice";

export const store = configureStore({
  reducer: {
    desenvolvedor: desenvolvedorReducer,
    nivel: nivelReducer
  }
});
