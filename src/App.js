import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./Routers";
import { useDispatch, useSelector } from "react-redux";

function App() {
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
