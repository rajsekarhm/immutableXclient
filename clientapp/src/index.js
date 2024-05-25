import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from './store/store'
ReactDOM.render(
  <Provider>
    <App store={store}/>
  </Provider>,
  document.getElementById("root")
);
