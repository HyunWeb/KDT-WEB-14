import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// store 정의 : 전역 상태를 관리하는 하나의 공간 (하나의 프로젝트에서 하나만!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App3 />
      {/* <App2 /> */}
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
