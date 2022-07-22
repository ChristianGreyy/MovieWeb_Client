import axios from "axios";
import axiosClient from "../api/axiosClient";

const getMovies = async () => {
  return await axios.get(`https://localhost:8080/api/movie`);
};

const getMovieById = async (movieId) => {
  return await axios.get(`https://localhost:8080/api/movie/${movieId}`);
};

const getVideosById = async (movieId) => {
  return await axios.get(
    `https://localhost:8080/api/movie/videos/${movieId}?sort=episode`
  );
};

const getMoviesByName = async (movieId) => {
  return await axios.get(`https://localhost:8080/api/movie/${movieId}/all`);
};

const getVideo = async (movieId, episode) => {
  return await axiosClient.get(
    `https://localhost:8080/api/movie/video/${movieId}/${episode}`
  );
};

const evaluateMovie = async (movieId, star) => {
  return await axiosClient.put(
    `https://localhost:8080/api/movie/${movieId}/evaluate`,
    {
      star,
    }
  );
};

const movieService = {
  evaluateMovie,
  getMovies,
  getMovieById,
  getVideosById,
  getVideo,
};

export default movieService;
