import React, { StrictMode } from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./global-store/store";
import { ErrorBoundary } from "react-error-boundary";
import { fallBackComponent } from "./FallBack";
import { createRoot } from "react-dom/client";
import { SizesList } from "./components/ListWidgets";
const container: HTMLElement | any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ErrorBoundary fallback={fallBackComponent()}>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </ErrorBoundary>,
);
