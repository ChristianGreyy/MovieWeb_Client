import axios from "axios";

const login = async (username, password) => {
  return await axios.post("http://localhost:8080/api/auth/login", {
    username,
    password,
  });
};

const register = async (username, email, password, passwordagain) => {
  return await axios.post("http://localhost:8080/api/auth/register", {
    username,
    email,
    password,
    passwordagain,
  });
};

const authService = {
  login,
  register,
};

export default authService;
