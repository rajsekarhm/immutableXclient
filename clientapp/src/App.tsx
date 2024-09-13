import { SigUpFormPage } from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { UserProfiles } from "./pages/UserProfile";
import ErrorPage from "./ErrorPage";
import MarketPlace from "./pages/ShowCase";
import { SignInPage } from "./pages/SignIn";
export const App = () => {
  return (
    <div className="no-css-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/account/users"
            element={<SigUpFormPage portal={"users"} />}
          />
          <Route
            path="/account/custodian"
            element={<SigUpFormPage portal={"custodian"} />}
          />
          <Route path="/signin" element={<SignInPage portal={"user"} />} />
          <Route
            path="/custodian"
            element={<SignInPage portal={"custodian"} />}
          />
          <Route path="/profile/:username" element={<UserProfiles />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/gotissue" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
