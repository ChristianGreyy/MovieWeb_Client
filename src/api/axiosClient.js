import axios from "axios";
import tokenService from "../services/token.service";
import { useEffect } from "react";
import { resetAccessToken } from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { store } from "../redux/store";

const axiosClient = axios.create({
  baseURL: "https://ecommerce-api-jsonsv.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = tokenService.getCookie("accessToken");
    // config.headers["Set-Cookie"] = refreshToken;
    if (accessToken) {
      // console.log(accessToken);
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    console.log("response");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  // function (response) {
  //   const accessToken = tokenService.getCookie("accessToken");
  //   if (!accessToken) {
  //     tokenService.setCookie(
  //       "accessToken",
  //       "bearer " + response.data.accessToken,
  //       1 * 60 * 1000
  //     );
  //   }
  //   // console.log(response.data.accessToken);
  //   console.log("response successfully");

  //   // console.log(response.data);
  //   return response.data;
  async function (err) {
    // console.log(err);
    const originalConfig = err.config;
    const refreshToken = tokenService.getCookie("refreshToken");

    // console.log("refreshTOken" + refreshToken);
    if (err.response) {
      console.log(err.response);
      if (err.response.status === 401 && !originalConfig.retry) {
        console.log("retry");
        originalConfig.retry = true;
      }

      try {
        const refreshToken = tokenService.getCookie("refreshToken");
        // console.log(refreshToken);
        const result = await store.dispatch(
          resetAccessToken({
            refreshToken,
          })
        );
        const data = unwrapResult(result);
        // console.log(data);

        originalConfig.headers.Authorization = `Bearer ${data.data.accessToken}`;
        return axiosClient(originalConfig);
      } catch (_error) {
        console.log("logout");
        // store.dispatch(authLogout());
        window.location.href = "/login";
        if (_error.response && _error.response.data) {
          return Promise.reject(_error.response.data);
        }

        return Promise.reject(_error);
      }
    }
  }
);

export default axiosClient;
