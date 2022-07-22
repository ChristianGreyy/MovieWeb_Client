import Home from "../pages/Home/Home";
import ForgetPassWord from "../pages/ForgetPassWord/ForgetPassWord";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import InfoFilm from "../pages/InfoFilm/index";
import WatchFilm from "../pages/WatchFilm/WatchFilm";
import Transaction from "../pages/Transaction/Transaction";
import TransactionResponse from "../pages/Transaction/TransactionResponse";
import WatchLive from "../pages/Live/WatchLive";
import NotFound from "../pages/Error/NotFound/NotFound";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/forget", component: ForgetPassWord },
  { path: "/register", component: Register },
  { path: "/transaction/response", component: TransactionResponse },
  { path: "/transaction", component: Transaction },
  { path: "/infoFilm/:movieId", component: InfoFilm },
  { path: "/watch/:movieId/:episode", component: WatchFilm },
  { path: "/live", component: WatchLive },
  { path: "/error/404", component: NotFound },
];
