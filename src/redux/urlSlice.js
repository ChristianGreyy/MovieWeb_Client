import { createSlice } from "@reduxjs/toolkit";
const urlClient = "http://localhost:3000";
const urlServer = "http://localhost:8080";

const initialState = {
  urlClient,
  urlServer,
};

export const urlSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    getUrl: (state, payload) => {
      return state;
    },
  },
});

export default urlSlice.reducer;
