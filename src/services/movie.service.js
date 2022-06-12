import axios from "axios";

const getMovieById = async (movieId) => {
  return await axios.get(`http://localhost:8080/api/movie/${movieId}`);
};

const authService = {
  getMovieById,
};

export default authService;
