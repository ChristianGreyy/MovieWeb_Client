import axios from "axios";
import axiosClient from "../api/axiosClient";

const getComments = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/comment/${movieId}`);
};

const commentService = {
  getComments,
};

export default commentService;
