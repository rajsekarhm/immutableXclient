import React, { StrictMode } from "react";
import App from "./architecture/App";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { fallBackComponent } from "./architecture/frameworks/presenter/FallBack";
import { createRoot } from "react-dom/client";
import { sstore } from "./architecture/controllers/_store";
const container: HTMLElement | any = document.getElementById("root");
import VITE_CLERK_PUBLISHABLE_KEY from "../clerk.env";
import { ClerkProvider } from "@clerk/clerk-react";
import { requestAPI } from "./requests/core/request";
const root = createRoot(container);
const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}


var raw = "";

var requestOptions = {
  method: 'GET'
};

fetch("http://127.0.0.1:8080/api/v1/user/getUser?governmentId=6382646689", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



root.render(
  <ErrorBoundary fallback={fallBackComponent()}>
    <Provider store={sstore}>
      <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </StrictMode>
    </Provider>
  </ErrorBoundary>
);
