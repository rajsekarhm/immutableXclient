import { useNavigate } from "react-router-dom";
import AppBar from "./shadcn/AppBard";
import { CreditCard, LogOut } from "lucide-react";
import useAccount from "../presenter/hooks/useAccount";

export default function PrimarySearchAppBar({actionEvents,authDetails,isUserDetailsNeed}:any) {
  const {firstName, lastName,email,userId} = useAccount()
  const {  isAuth } = authDetails
  const { onSearch,onAccountClick, OnMoreClick} = actionEvents
  const navigate =  useNavigate()
  const isLeftSideNeeded = true
  const showCaseText = "ImmutableX"
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
    onMore: {
      action1:{
        text:"explorer",
        action:() => { console.log("onClick explorer")}
      },
      action2:{
        text:"blog",
        action:() => { console.log( "onClick blog")}
      }
    }
  };

  return (
    <>
       <AppBar showCaseText={showCaseText} onSearch={onSearch} isLeftSideNeeded={isLeftSideNeeded} onAccountClick={onAccountClick} OnMoreClick={OnMoreClick} isAuth={isAuth} menuDetails={dropDown} showUserDetails={isUserDetailsNeed} userDetails={{name:firstName+lastName,email:email,userId:userId} }/>
    </>
  );
}


