import axios from "axios";
import axiosClient from "../api/axiosClient";

const getUserById = async (userId) => {
  return await axios.get(`http://localhost:8080/api/user/${userId}`);
};

const authService = {
  getUserById,
};

export default authService;
