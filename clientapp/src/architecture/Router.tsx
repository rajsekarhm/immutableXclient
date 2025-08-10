import SigUpFormPage from "./frameworks/views/ui/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Home from "./frameworks/views/ui/Home";
import UserProfile from "./frameworks/views/ui/UserProfile";
import ErrorPage from "./frameworks/views/ErrorPage";
import MarketPlace from "./frameworks/views/ui/MarketPlace";
import SignInPage from "./frameworks/views/ui/SignIn";
import CustodianProfiles from "./frameworks/views/ui/CustodianProfiles";
import Builder from "../platform/builder/Builder";
import AssetCreation from "./frameworks/views/ui/Asset";
import TokenCreation from "./frameworks/views/ui/Token";
import ExternalSignIn from "./frameworks/views/ui/ExternalSignIn";
import ExternalSignUp from "./frameworks/views/ui/ExternalSignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up/users",
    element: <SigUpFormPage portal={"users"} />,
  },
  {
    path: "/sign-up/custodian",
    element: <SigUpFormPage portal={"custodian"} />,
  },
  {
    path: "/sign-in/users",
    element: <SignInPage portal={"users"} />,
  },
  {
    path: "/sign-in/custodian",
    element: <SignInPage portal={"custodian"} />,
  },
  {
    path: "/portfolio/:userId",
    element: <UserProfile />,
  },
  {
    path: "/marketplace",
    element: <MarketPlace />,
  },
  {
    path: "/marketplace/:userId",
    element: <MarketPlace />,
  },
  {
    path: "/custodian",
    element: <CustodianProfiles />,
  },
  {
    path: "/gotissue",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/clerk/sign-in",
    element: <ExternalSignIn />,
  },
  {
    path: "clerk/sign-up",
    element: <ExternalSignUp />,
  },
  {
    path: "/builder/:userId",
    element: <Builder />,
  },
  {
    path:'/asset-digitalize/:userId',
    element:<AssetCreation/>
  },
  {
    path:'/tokenization/:userId',
    element:<TokenCreation/>
  }
]);

export default Router;
