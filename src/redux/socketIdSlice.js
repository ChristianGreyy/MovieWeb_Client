import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketId: "",
};

export const socketIdSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setSocketId: (state, action) => {
      state.socketId = action.payload;
      // console.log(action.payload);
      return state;
    },
    getSocketId: (state, action) => {
      return state;
    },
  },
});

export const { setSocketId } = socketIdSlice.actions;

export default socketIdSlice.reducer;
