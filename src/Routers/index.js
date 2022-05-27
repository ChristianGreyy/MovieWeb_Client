import Home from "../pages/Home/Home";
import ForgetPassWord from "../pages/ForgetPassWord/ForgetPassWord";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/forget', component: ForgetPassWord},
    {path: '/register', component: Register}
];