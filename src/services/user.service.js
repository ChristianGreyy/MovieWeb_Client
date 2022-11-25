import axios from "axios";
import axiosClient from "../api/axiosClient";

const getUserById = async (userId) => {
  return await axios.get(`${process.env.REACT_APP_URL}/api/user/${userId}`);
};

const authService = {
  getUserById,
};

export default authService;
