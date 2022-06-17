import axios from "axios";
import axiosClient from "../api/axiosClient";

const getMovieById = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/movie/${movieId}`);
};

const getVideosById = async (movieId) => {
  return await axios.get(
    `http://localhost:8080/api/movie/videos/${movieId}?sort=episode`
  );
};

const getMoviesByName = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/movie/${movieId}/all`);
};

const getVideo = async (movieId, episode) => {
  return await axiosClient.get(
    `http://localhost:8080/api/movie/video/${movieId}/${episode}`
  );
};

const authService = {
  getMovieById,
  getVideosById,
  getVideo,
};

export default authService;
