import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    avatar: "http://localhost:8080/avatars/default.jpg",
  },
};

export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    getUser: (state, action) => {
      console.log(state);
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
