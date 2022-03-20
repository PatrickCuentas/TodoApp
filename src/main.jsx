import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
// import { TodoApp } from "./TodoApp";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { SunspotLoaderComponent } from "./components/Loaders/SunspotLoaderComponent";
import "./index.css";
const rootEl = document.getElementById("root");

const TodoApp = lazy(() => import("./TodoApp.jsx"));
// const Hello = lazy(() => import("./components/Hello.jsx"));

render(
  <Provider store={store}>
  <Suspense fallback={<SunspotLoaderComponent />}>
    <TodoApp />
  </Suspense>
  </Provider>,
  rootEl
);
