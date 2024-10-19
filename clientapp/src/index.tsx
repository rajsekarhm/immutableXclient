import React, { StrictMode } from "react";
import App from "./architecture/App";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { fallBackComponent } from "./architecture/frameworks/presenter/FallBack";
import { createRoot } from "react-dom/client";
import { sstore } from "./architecture/controllers/_store";

// import { SizesList } from "./architecture/frameworks/components/ListWidgets";
// import TemporaryDrawer from "./architecture/frameworks/components/Drawer";
const container: HTMLElement | any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ErrorBoundary fallback={fallBackComponent()}>
    <Provider store={sstore}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </ErrorBoundary>
);
