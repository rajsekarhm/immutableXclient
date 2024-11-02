import SigUpFormPage from "./frameworks/presenter/ui/SignUp";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./frameworks/presenter/ui/Home";
import UserProfiles from "./frameworks/presenter/ui/UserProfile";
import ErrorPage from "./frameworks/presenter/ErrorPage";
import MarketPlace from "./frameworks/presenter/ui/MarketPlace";
import SignInPage from "./frameworks/presenter/ui/SignIn";
import CustodianProfiles from "./frameworks/presenter/CustodianProfiles";
import { SignIn, SignUp } from "@clerk/clerk-react";

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
    path:"/gotissue",
    element:<ErrorPage/>
  },
  {
    path:"*",
    element:<ErrorPage/>
  },
  {
    path:'clerk/sign-in',
    element:<SignIn/>
  },
  {
    path:'clerk/sign-up',
    element:<SignUp/>
  }
]);



export default Router