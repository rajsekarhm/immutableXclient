import { SigUpFormPage } from "./architecture/frameworks/presenter/ui/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { UserProfiles } from "./architecture/frameworks/presenter/ui/UserProfile";
import ErrorPage from "./ErrorPage";
import MarketPlace from "./architecture/frameworks/presenter/ui/MarketPlace";
import { SignInPage } from "./architecture/frameworks/presenter/ui/SignIn";
export const App = () => {
  return (
    <div className="no-css-app" style={{ width: "auto" }}>
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
          <Route
            path="/login/users"
            element={<SignInPage portal={"users"} />}
          />
          <Route
            path="/login/custodian"
            element={<SignInPage portal={"custodian"} />}
          />
          <Route path="/portfolio/:username" element={<UserProfiles />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/gotissue" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
