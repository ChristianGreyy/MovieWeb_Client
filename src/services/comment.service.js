import axios from "axios";
import axiosClient from "../api/axiosClient";

const getComments = async (movieId) => {
  return await axios.get(`https://localhost:8080/api/comment/${movieId}`);
};

const postComment = async (content, commentId, movieId) => {
  console.log("service comment");
  return await axiosClient.post(
    `https://localhost:8080/api/comment/${movieId}`,
    {
      content,
      commentId,
    }
  );
};

const likeComment = async (commentId) => {
  return await axiosClient.put(
    `https://localhost:8080/api/comment/${commentId}/like`,
    {
      commentId,
    }
  );
};

const commentService = {
  getComments,
  postComment,
  likeComment,
};

export default commentService;
