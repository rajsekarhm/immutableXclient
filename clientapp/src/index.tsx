import React, { StrictMode } from "react";
import App from "./architecture/App";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { fallBackComponent } from "./architecture/frameworks/presenter/FallBack";
import { createRoot } from "react-dom/client";
const container: HTMLElement | any = document.getElementById("root");
import VITE_CLERK_PUBLISHABLE_KEY from "../clerk.env";
import { ClerkProvider } from "@clerk/clerk-react";
const root = createRoot(container);
const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;
import './index.css'
import store from "./architecture/adapters/store";
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
root.render(
  <ErrorBoundary fallback={fallBackComponent()}>
    <Provider store={store}>
      <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <App />
        </ClerkProvider>
      </StrictMode>
    </Provider>
  </ErrorBoundary>
);
