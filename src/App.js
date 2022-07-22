import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./Routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { tokenService } from "./services";
import axiosClient from "./api/axiosClient";
import { setUser } from "./redux/userSlice";
import axios from "axios";

function App() {
  const accessToken = tokenService.getCookie("accessToken");
  const urlSlice = useSelector((state) => state.url);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await axiosClient.get(`${urlSlice.urlServer}/api/user/info`);
      console.log(res);
      dispatch(setUser(res.user));
    })();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((item) => {
            let Page = item.component;
            return (
              <Route key={item.path} path={item.path} element={<Page />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
