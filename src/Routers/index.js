import Home from "../pages/Home/Home";
import ForgetPassWord from "../pages/ForgetPassWord/ForgetPassWord";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import InfoFilm from "../pages/InfoFilm/index";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/forget", component: ForgetPassWord },
  { path: "/register", component: Register },
  { path: "/InfoFilm/:movieId", component: InfoFilm },
];
