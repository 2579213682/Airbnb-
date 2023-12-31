import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import App from "@/App";
import "./assets/css/index.less";
import "normalize.css";
import store from "./store";
// import "antd/dist/antd.less";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>{" "}
        </ThemeProvider>{" "}
      </Provider>{" "}
    </Suspense>{" "}
  </React.StrictMode>
);
