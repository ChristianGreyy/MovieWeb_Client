import { createSlice } from "@reduxjs/toolkit";
import { useCookies } from "react-cookie";

const initialState = {
  otp: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.otp = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
