import SigUpFormPage from "./frameworks/presenter/ui/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Home from "./frameworks/presenter/ui/Home";
import UserProfiles from "./frameworks/presenter/ui/UserProfile";
import ErrorPage from "./frameworks/presenter/ErrorPage";
import MarketPlace from "./frameworks/presenter/ui/MarketPlace";
import SignInPage from "./frameworks/presenter/ui/SignIn";
import CustodianProfiles from "./frameworks/presenter/ui/CustodianProfiles";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Builder from "./frameworks/presenter/Builder";
import AssetCreation from "./frameworks/presenter/ui/Asset";
import TokenCreation from "./frameworks/presenter/ui/Token";

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
    path: "/portfolio/:username",
    element: <UserProfiles />,
  },
  {
    path: "/marketplace",
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
    element: <SignIn />,
  },
  {
    path: "clerk/sign-up",
    element: <SignUp />,
  },
  {
    path: "/builder",
    element: <Builder />,
  },
  {
    path:'/asset',
    element:<AssetCreation/>
  },
  {
    path:'/token',
    element:<TokenCreation/>
  }
]);

export default Router;
