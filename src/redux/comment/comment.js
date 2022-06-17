import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../../services";

export const streamming = createAsyncThunk(
  "/movie/streamming",
  async ({ movieId }, { rejectWithValue }) => {
    try {
      const res = await movieService.streamming(movieId);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
