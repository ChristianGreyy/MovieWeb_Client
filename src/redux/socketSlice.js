import { createSlice } from "@reduxjs/toolkit";
const { io } = require("socket.io-client");
const socket = io("http://localhost:8080");

const initialState = {
  socket,
};

export const counterSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    getSocket: (state, payload) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = counterSlice.actions;

export default counterSlice.reducer;
