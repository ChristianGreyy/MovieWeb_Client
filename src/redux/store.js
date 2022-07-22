import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import urlSlice from "./urlSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    url: urlSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
