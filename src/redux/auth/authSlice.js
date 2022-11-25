import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services";
import axios from "axios";

export const resetAccessToken = createAsyncThunk(
  "auth/resetAccessToken",
  async ({ refreshToken }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/api/auth/resetAccessToken`,
        {
          refreshToken,
        }
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginAPI = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await authService.login(username, password);
      return res.data.token;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerAPI = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, passwordagain }, { rejectWithValue }) => {
    try {
      const res = await authService.register(
        username,
        email,
        password,
        passwordagain
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const forgotPWAPI = createAsyncThunk(
  "auth/forgot",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await authService.forgot(email);
      console.log(res);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
      // console.log(err);
    }
  }
);

export const checkForgotPWAPI = createAsyncThunk(
  "auth/forgot",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const res = await authService.checkForgot(email, otp);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
      // console.log(err);
    }
  }
);

export const resetPWAPI = createAsyncThunk(
  "auth/forgot",
  async ({ email, password, passwordagain }, { rejectWithValue }) => {
    try {
      const res = await authService.resetPW(email, password, passwordagain);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
      // console.log(err);
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
