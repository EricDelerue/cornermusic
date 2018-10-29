import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./views/App"; // export default App
import AppStore from "./store/createAppStore"; // export default createAppStore

import "./views/styles/app.scss";

function doRender() {
  const app = document.getElementById("app");
  const renderOrHydrate = app.innerHTML.trim().length ? "hydrate" : "render";
  ReactDOM[renderOrHydrate](<App store={AppStore} />, app);
}

doRender();
/*
Warning: Expected server HTML to contain a matching <div> in <div>.
https://github.com/leebenson/reactql/issues/86
ReactDOM.hydrate(
  <App store={ AppStore } />, 
  document.getElementById('app')
);
*/
