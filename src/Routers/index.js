import Home from "../pages/Home/Home";
import ForgetPassWord from "../pages/ForgetPassWord/ForgetPassWord";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import InfoFilm from "../pages/InfoFilm/index";
import WatchFilm from "../pages/WatchFilm/WatchFilm";
import Transaction from "../pages/Transaction/Transaction";
import Account from "../pages/User/Account/Account";
import Pay from "../pages/User/Pay/Pay";
import Favorite from "../pages/User/Favorite/Favorite";
import History from "../pages/User/History/History";
import Comments from "../pages/User/Comments/Comments";
import Watching from "../pages/User/Watching/Watching";
import Setting from "../pages/User/Setting/Setting";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/forget", component: ForgetPassWord },
  { path: "/register", component: Register },
  { path: "/transaction", component: Transaction },
  { path: "/InfoFilm/:movieId", component: InfoFilm },
  { path: "/Watch", component: WatchFilm },
  { path: "/User", component: Account },
  { path: "/User/Pay", component: Pay },
  { path: "/User/Favorite", component: Favorite },
  { path: "/User/Watching", component: Watching },
  { path: "/User/Setting", component: Setting },
  { path: "/User/History", component: History },
  { path: "/User/Comments", component: Comments },
];
