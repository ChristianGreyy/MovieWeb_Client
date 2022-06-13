import Home from "../pages/Home/Home";
import ForgetPassWord from "../pages/ForgetPassWord/ForgetPassWord";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import InfoFilm from "../pages/InfoFilm/index";
import WatchFilm from "../pages/WatchFilm/WatchFilm";
import Transaction from "../pages/Transaction/Transaction";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/forget", component: ForgetPassWord },
  { path: "/register", component: Register },
  { path: "/transaction", component: Transaction },
  { path: "/InfoFilm/:movieId", component: InfoFilm },
  { path: "/Watch", component: WatchFilm },
];
