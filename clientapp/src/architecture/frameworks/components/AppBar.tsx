import { useNavigate } from "react-router-dom";
import AppBar from "./shadcn/AppBard";
import { CreditCard, LogOut } from "lucide-react";

export default function PrimarySearchAppBar({actionEvents,authDetails,userDetails}:any) {
  const {name, email, userId}= userDetails
  const {  isAuth } = authDetails
  const { onSearch,onAccountClick, OnMoreClick} = actionEvents
  const navigate =  useNavigate()
  const dropDown = {
    dropDownText:"Home",
    title: "Account",
    details: [
      {
        element: <CreditCard />,
        text: "Dashboard",
        itHasSubtab: false,
        subTab: null,
        onClick: () => { navigate(`/portfolio/${userId}`)},
      },
      {
        element: <LogOut />,
        text: "Logout",
        itHasSubtab: false,
        subTab: null,
        onClick: () => { navigate('/') },
      },
    ],
  };

  return (
    <>
       <AppBar onSearch={onSearch} onAccountClick={onAccountClick} OnMoreClick={OnMoreClick} isAuth={isAuth} menuDetails={dropDown} userDetails={{name:name,email:email,userId:userId}}/>
    </>
  );
}


