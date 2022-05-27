import { createSlice } from "@reduxjs/toolkit";
import { useCookies } from "react-cookie";

const initialState = {
  accessToken: "",
  refreshToken: "",
};

export const counterSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, payload) => {
      console.log(payload.payload);
      console.log(state.accessToken);
      state.accessToken = payload.payload.access;
      state.refreshToken = payload.payload.refresh;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = counterSlice.actions;

export default counterSlice.reducer;
