import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services";

// First, create the thunk
export const loginAPI = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    try {
      const res = await authService.login(username, password);

      return res.data.token;
    } catch (err) {
      console.log(err);
    }
  }
);

// Then, handle actions in your reducers:
const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      console.log("successfully");
    });
  },
});
