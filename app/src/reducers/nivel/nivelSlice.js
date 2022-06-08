import { createSlice } from "@reduxjs/toolkit";

const initialState = { keys: [], values: [] };

export const nivelSlice = createSlice({
  name: "nivel",
  initialState,
  reducers: {
    create: (state, { payload }) => {
      try {
        const nivel = payload;
        state.keys.concat(nivel.id);
        state.values.concat(nivel);
      } catch (err) {
        console.log(err);
      }
    },
    update: (state, { payload }) => {
      try {
        const index = state.keys.indexOf(payload.id);
        if (index > -1) {
          const nivel = {};
          state.values[index] = nivel;
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
        payload.forEach((nivel) => {
          state.keys.push(nivel.id);
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
