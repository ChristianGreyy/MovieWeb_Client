import axios from "axios";
import axiosClient from "../api/axiosClient";

const getUserById = async () => {
  return await axios.get(
    "https://localhost:8080/api/user/62ac9ad795c9c707ef257a9d"
  );
};

const authService = {
  getUserById,
};

export default authService;
