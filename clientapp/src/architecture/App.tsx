import { SigUpFormPage } from "./frameworks/presenter/ui/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./frameworks/presenter/ui/Home";
import { UserProfiles } from "./frameworks/presenter/ui/UserProfile";
import ErrorPage from "./frameworks/presenter/ErrorPage";
import MarketPlace from "./frameworks/presenter/ui/MarketPlace";
import { SignInPage } from "./frameworks/presenter/ui/SignIn";
import CustodianProfiles from "./frameworks/presenter/CustodianProfiles";
import UserRepository from "./applications/infrastructure/UserRepository";
import UserUseCase from "./applications/usecases/UserUseCase";
import UserHandler from "./controllers/handlers/UserHandler";

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserHandler(userUseCase);

const newUser = {
  securityId: "123",
  firstname: "John",
  lastname: "Doe",
  email: "john@example.com",
  phoneNumber: 1234567890,
  password: "secret",
  location: "New York",
  governmentId: 4567,
  edition: "Standard",
  isAgent: false,
  AgentId: 0,
  isAuthForBuyAndSell: "yes",
  assetHolding: undefined,
};

console.log(userController.create(newUser))
// console.log(userController.getById(1));
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
          <Route path="/custodian" element={<CustodianProfiles />} />
          <Route path="/gotissue" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
