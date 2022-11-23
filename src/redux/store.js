import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import urlSlice from "./urlSlice";
import userSlice from "./userSlice";
import socketIdSlice from ".//socketIdSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    url: urlSlice,
    user: userSlice,
    socketId: socketIdSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
