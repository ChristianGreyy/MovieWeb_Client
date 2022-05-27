import axios from "axios";

const login = async (username, password) => {
  return await axios.post("http://localhost:8080/api/auth/login", {
    username,
    password,
  });
};

const authService = {
  login,
};

export default authService;
