import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import "tw-elements";
import socketContext from "./contexts/socket.context";
import { socket } from "./contexts/socket.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <CookiesProvider>
      <socketContext.Provider value={socket}>
        <App />
      </socketContext.Provider>
    </CookiesProvider>
  </Provider>
  // </React.StrictMode>
);
