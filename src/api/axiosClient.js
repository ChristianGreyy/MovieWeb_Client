import axios from "axios";
import tokenService from "../services/token.service";
import { useEffect } from "react";
import { resetAccessToken } from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const axiosClient = axios.create({
  baseURL: "https://ecommerce-api-jsonsv.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const refreshToken = tokenService.getCookie("refreshToken");
    const accessToken = tokenService.getCookie("accessToken");

    config.headers["Set-Cookie"] = refreshToken;
    if (accessToken) {
      console.log(accessToken);
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    const accessToken = tokenService.getCookie("accessToken");
    if (!accessToken) {
      tokenService.setCookie(
        "accessToken",
        "bearer " + response.data.accessToken,
        1 * 60 * 1000
      );
    }
    // console.log(response.data.accessToken);
    console.log("response successfully");

    console.log(response.data);
    return response.data;
  },
  function (error) {
    console.log("response error");
    console.log(error);
    const refreshToken = tokenService.getCookie("refreshToken");
    const dispatch = useDispatch();
    // (async () => {
    //   try {
    //     const result = await dispatch(
    //       resetAccessToken({
    //         refreshToken,
    //       })
    //     );
    //     const data = unwrapResult(result);
    //     console.log(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })();

    return Promise.reject(error);
  }
);

export default axiosClient;
