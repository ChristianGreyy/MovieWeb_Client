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
import Account from "../pages/User/Account/Account";
import Pay from "../pages/User/Pay/Pay";
import Favorite from "../pages/User/Favorite/Favorite";
import History from "../pages/User/History/History";
import Comments from "../pages/User/Comments/Comments";
import Watching from "../pages/User/Watching/Watching";
import Setting from "../pages/User/Setting/Setting";
import SearchFilm from "../pages/SearchFilm/SearchFilm";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
    children: { path: ":kind", component: Home },
  },
  { path: "/login", component: Login },
  { path: "/forget", component: ForgetPassWord },
  { path: "/register", component: Register },
  { path: "/transaction/response", component: TransactionResponse },
  { path: "/transaction", component: Transaction },
  { path: "/infoFilm/:movieId", component: InfoFilm },
  { path: "/watch/:movieId/:episode", component: WatchFilm },
  { path: "/live", component: WatchLive },
  { path: "/error/404", component: NotFound },
  { path: "/InfoFilm/:movieId", component: InfoFilm },
  { path: "/Watch", component: WatchFilm },
  { path: "/User/:userId", component: Account },
  { path: "/User/Pay", component: Pay },
  { path: "/User/Favorite", component: Favorite },
  { path: "/User/Watching", component: Watching },
  { path: "/User/Setting", component: Setting },
  { path: "/User/History", component: History },
  { path: "/User/Comments", component: Comments },
  { path: "/Search", component: SearchFilm },
];
