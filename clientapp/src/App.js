import { Registers } from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomePage";
import { Login } from "./pages/Login";
import { ProfileActions } from "./UserProfile";
import ErrorPage from "./ErrorPage";
import MarketPlace from "./ShowCase";
export const App = () => {
  return (
    <div className="no-css-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<ProfileActions />} />
          <Route path="/marketPlace" element={<MarketPlace/>}/>
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
