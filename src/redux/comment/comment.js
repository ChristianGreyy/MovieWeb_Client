import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentService } from "../../services";

export const postComment = createAsyncThunk(
  "/movie/postComment",
  async ({ content, commentId, movieId }, { rejectWithValue }) => {
    try {
      console.log(movieId);
      const res = await commentService.postComment(content, commentId, movieId);
      console.log(res);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
