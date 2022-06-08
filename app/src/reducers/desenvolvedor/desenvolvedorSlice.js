import { createSlice } from "@reduxjs/toolkit";

function initializeState() {
  const initialState = { keys: [], values: [] };
  return initialState;
}

export const desenvolvedorSlice = createSlice({
  name: "desenvolvedor",
  initialState: initializeState(),
  reducers: {
    create: (state, { payload }) => {
      try {
        const desenvolvedor = payload;
        state.keys.concat(desenvolvedor.id);
        state.values.concat(desenvolvedor);
      } catch (err) {
        console.log(err);
      }
    },
    update: (state, { payload }) => {
      try {
        const index = state.keys.indexOf(payload.id);
        if (index > -1) {
          const desenvolvedor = {};
          state.values[index] = desenvolvedor;
        }
      } catch (err) {
        console.log(err);
      }
    },
    remove: (state, { payload }) => {
      try {
        const index = state.keys.indexOf(payload.id);
        if (index > -1) {
          state.keys = state.keys.slice(index, 1);
          state.values = state.values.slice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
    fetch: (state, { payload }) => {
      try {
        state.keys.length = 0;
        state.values.length = 0;
        payload.forEach((desenvolvedor) => {
          state.keys.push(desenvolvedor.id);
          state.values.push(desenvolvedor);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
});

export const { fetch, create, remove, update } = desenvolvedorSlice.actions;

export default desenvolvedorSlice.reducer;
