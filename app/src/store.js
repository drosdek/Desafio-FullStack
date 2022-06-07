import { configureStore } from "@reduxjs/toolkit";
import desenvolvedorReducer from "./reducers/desenvolvedor/desenvolvedorSlice";
import nivelReducer from "./reducers/nivel/nivelSlice";
import menuReducer from "./reducers/menu/menuSlice";

export const store = configureStore({
  reducer: {
    desenvolvedor: desenvolvedorReducer,
    nivel: nivelReducer,
    menu: menuReducer
  }
});
