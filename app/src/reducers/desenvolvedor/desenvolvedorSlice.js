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
        state.keys.push(payload._id);
        state.values.push(payload);
      } catch (err) {
        console.log(err);
      }
    },
    update: (state, { payload }) => {
      try {
        const index = state.keys.indexOf(payload._id);
        if (index > -1) {
          state.values[index] = payload;
        }
      } catch (err) {
        console.log(err);
      }
    },
    remove: (state, { payload }) => {
      try {
        const index = state.keys.indexOf(payload);
        if (index > -1) {
          state.keys.splice(index, 1);
          state.values.splice(index, 1);
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
          state.keys.push(desenvolvedor._id);
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
