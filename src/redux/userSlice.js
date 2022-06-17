import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import axios from "axios";

const user = {
  name: "hung",
};
// const [user, setUser] = useState();

// useEffect(() => {
//   (async () => {
//     const user = axiosClient.axios(
//       "http://localhost:8080/api/user/62ac9ad795c9c707ef257a9d"
//     );
//     console.log(user);
//     setUser(user);
//   })();
// }, []);

const initialState = {
  user,
};

export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    getUrl: (state, payload) => {
      return state;
    },
  },
});

export default userSlice.reducer;
