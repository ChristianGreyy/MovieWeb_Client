import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import socketSlice from "./socketSlice";
import urlSlice from "./urlSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    socket: socketSlice,
    url: urlSlice,
  },
});
