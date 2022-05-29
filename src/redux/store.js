import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import socketSlice from "./socketSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    socket: socketSlice,
  },
});
