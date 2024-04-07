import { Registers } from "./Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomePage";
import { Login } from "./Login";
import { ProfileActions } from "./DashBoard";
import ErrorPage from "./ErrorPage";
export const App = () => {
  return (
    <div className='no-css-app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<ProfileActions/>} />
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
