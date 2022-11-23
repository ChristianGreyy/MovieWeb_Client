import axios from "axios";
import axiosClient from "../api/axiosClient";

const getComments = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/comment/${movieId}`);
};

const postComment = async (content, commentId, movieId) => {
  console.log("service comment");
  return await axiosClient.post(
    `http://localhost:8080/api/comment/${movieId}`,
    {
      content,
      commentId,
    }
  );
};

const likeComment = async (commentId) => {
  return await axiosClient.put(
    `http://localhost:8080/api/comment/${commentId}/like`,
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
