import axios from "axios";

const getMovieById = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/movie/${movieId}`);
};

const streamming = async (movieId) => {
  return await axios.get(
    `http://localhost:8080/api/movie/${movieId}/streamming`
  );
};

const authService = {
  getMovieById,
  streamming,
};

export default authService;
