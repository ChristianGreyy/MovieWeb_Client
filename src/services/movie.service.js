import axios from "axios";
import axiosClient from "../api/axiosClient";

const getMovies = async (filter) => {
  if (filter) {
    let movies = await axios.get(
      `${process.env.REACT_APP_URL}/api/movie${filter}`
    );
    console.log(movies);
    return await axios.get(`${process.env.REACT_APP_URL}/api/movie${filter}`);
  }
  return await axios.get(`${process.env.REACT_APP_URL}/api/movie`);
};

const getMovieById = async (movieId) => {
  return await axios.get(`${process.env.REACT_APP_URL}/api/movie/${movieId}`);
};

const getVideosById = async (movieId) => {
  return await axios.get(
    `${process.env.REACT_APP_URL}/api/movie/videos/${movieId}?sort=episode`
  );
};

const getMoviesByName = async (movieId) => {
  return await axios.get(
    `${process.env.REACT_APP_URL}/api/movie/${movieId}/all`
  );
};

const getVideo = async (movieId, episode) => {
  return await axiosClient.get(
    `${process.env.REACT_APP_URL}/api/movie/video/${movieId}/${episode}`
  );
};

const evaluateMovie = async (movieId, star) => {
  return await axiosClient.put(
    `${process.env.REACT_APP_URL}/api/movie/${movieId}/evaluate`,
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
