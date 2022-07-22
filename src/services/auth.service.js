import axios from "axios";
import axiosClient from "../api/axiosClient";

const login = async (username, password) => {
  return await axios.post("https://localhost:8080/api/auth/login", {
    username,
    password,
  });
};

const register = async (username, email, password, passwordagain) => {
  return await axios.post("https://localhost:8080/api/auth/register", {
    username,
    email,
    password,
    passwordagain,
  });
};

const forgot = async (email) => {
  return await axios.post("https://localhost:8080/api/auth/forgot-password", {
    email,
  });
};

const checkForgot = async (email, otp) => {
  return await axios.get("https://localhost:8080/api/auth/forgot-password", {
    params: {
      email,
      otp,
    },
  });
};

const resetPW = async (email, password, passwordagain) => {
  return await axios.post("https://localhost:8080/api/auth/reset-password", {
    email,
    password,
    passwordagain,
  });
};

const authService = {
  login,
  register,
  forgot,
  checkForgot,
  resetPW,
};

export default authService;
