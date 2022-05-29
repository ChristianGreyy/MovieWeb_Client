import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services";

export const loginAPI = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await authService.login(username, password);

      return res.data.token;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerAPI = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, passwordagain }) => {
    try {
      const res = await authService.register(
        username,
        email,
        password,
        passwordagain
      );

      console.log(res);

      // return res.data.token;
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
