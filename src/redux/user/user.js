import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services";

export const getUserById = createAsyncThunk(
  "/user/getUserById",
  async (userId) => {
    try {
      const res = await userService.getUserById(userId);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
