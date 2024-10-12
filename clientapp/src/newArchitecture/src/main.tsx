import { createRoot } from "react-dom/client";
import InitialSetupPage from "./frameworks";
import { Provider } from "react-redux";
import store from "./applications/local-store/Store";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <InitialSetupPage />
  </Provider>
);
