import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const refreshToken = tokenService.getCookie("refreshToken");
  const urlSlice = useSelector((state) => state.url);
  const dispatch = useDispatch();

  useEffect(() => {
    if (refreshToken) {
      (async () => {
        const res = await axiosClient.get(
          `${urlSlice.urlServer}/api/user/info`
        );
        console.log(res.user);
        dispatch(setUser(res.user));
      })();
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((item, index) => {
            let Page = item.component;
            let childPage = item.children?.element;
            return (
              <Route key={item.path} path={item.path} element={<Page />}>
                <Route
                  key={index}
                  path={item.children?.path}
                  element={<childPage />}
                />
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
