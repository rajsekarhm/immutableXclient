import { Registers } from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomePage";
import { UserProfiles } from "./UserProfile";
import ErrorPage from "./ErrorPage";
import MarketPlace from "./ShowCase";
import { SignIn } from "./pages/SignIn";
export const App = () => {
  return (
    <div className="no-css-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/:custodian" element={<SignIn />} />
          <Route path="/profile/:username" element={<UserProfiles />} />
          <Route path="/marketplace" element={<MarketPlace/>}/>
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
