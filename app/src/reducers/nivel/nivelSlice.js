import { createSlice } from "@reduxjs/toolkit";

const initialState = { keys: [], values: [] };

export const nivelSlice = createSlice({
  name: "nivel",
  initialState,
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
        payload.forEach((nivel) => {
          state.keys.push(nivel._id);
          state.values.push(nivel);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
});

export const { fetch, update, remove, create } = nivelSlice.actions;

export default nivelSlice.reducer;
