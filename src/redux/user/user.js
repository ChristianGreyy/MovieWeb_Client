import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services";

export const getUserById = createAsyncThunk("/user/getUserById", async () => {
  try {
    const res = await userService.getUserById();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
});
