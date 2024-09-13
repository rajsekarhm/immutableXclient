import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./global-store/store";
import { ErrorBoundary } from "react-error-boundary";
import { fallBackComponent } from "./FallBack";
ReactDOM.render(
  <ErrorBoundary fallback={fallBackComponent()}>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root"),
);
