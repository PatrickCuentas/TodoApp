import React from "react";
import { render } from "react-dom";
import { TodoApp } from "./TodoApp";
import { store } from "./store/store";
import { Provider } from "react-redux";
import {GridLayoutComponent} from "./components/GridLayoutComponent.jsx"
import "./index.css";

const rootEl = document.getElementById("root");

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootEl
);
