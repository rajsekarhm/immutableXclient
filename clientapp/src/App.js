import { Registers } from "./Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomePage";
import { Login } from "./Login";
import { DashBoard } from "./DashBoard";
import ErrorPage from "./ErrorPage";
import styles from "./App.css";
import ListedLand from "./MarketPlace";
import Inspector from "./Inspector";
export const App = () => {
  return (
    <div className={`${styles.App}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:username" element={<DashBoard />} />
          <Route path="/errorPage" element={<ErrorPage />} />
          <Route path="/marketPlace" element={<ListedLand />} /> 
          <Route path="/marketPlace/:username" element={<ListedLand/>} />
          <Route path="/inspector" element={<Inspector />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
