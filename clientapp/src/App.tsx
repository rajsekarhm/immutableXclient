import { SigUpFormPage } from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { UserProfiles } from "./pages/UserProfile";
import ErrorPage from "./ErrorPage";
import MarketPlace from "./ShowCase";
import { SignInPage } from "./pages/SignIn";
export const App = () => {
  return (
    <div className="no-css-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/users" element={<SigUpFormPage />} />
          <Route path="/signin" element={<SignInPage portal={null} />} />
          <Route path="/custodian" element={<SignInPage portal={'custodian'} />} />
          <Route path="/profile/:username" element={<UserProfiles />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
