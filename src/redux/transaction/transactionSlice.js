import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transactionService } from "../../services";

export const createPaymentURL = createAsyncThunk(
  "/transaction/create_payment_url",
  async ({ amount, bankCode }, { rejectWithValue }) => {
    try {
      const res = await transactionService.createPaymentURL(amount, bankCode);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
      // console.log(err);
    }
  }
);

export const response = createAsyncThunk(
  "/transaction/response",
  async ({ amount }, { rejectWithValue }) => {
    try {
      const res = await transactionService.response(amount);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
      // console.log(err);
    }
  }
);
