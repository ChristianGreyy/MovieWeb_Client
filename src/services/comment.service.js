import axios from "axios";
import axiosClient from "../api/axiosClient";

const getComments = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/comment/${movieId}`);
};

const postComment = async (content, commentId, movieId) => {
  return await axiosClient.post(
    `http://localhost:8080/api/comment/${movieId}`,
    {
      content,
      commentId,
    }
  );
};

const commentService = {
  getComments,
  postComment,
};

export default commentService;
