import { useNavigate, useParams } from "react-router-dom";
import AppBar from "./shadcn/AppBard";
import { CreditCard, LogOut, ShoppingBagIcon } from "lucide-react";

export default function PrimarySearchAppBar({
  authDetails,
  isUserDetailsNeed,
  userDetails,
}: any) {
  const { firstName, lastName, email, userId } = userDetails;
  const { isAuth } = authDetails;
  const actions = {
    onSearch: () => {},
    onAccountClick: () => navigate(`/portfolio/${userId}`),
    OnLogoutClick: () => {
      navigate("/");
    },
    OnMoreClick: () => {},
  };
  const navigate = useNavigate();
  const isLeftSideNeeded = true;
  const showCaseText = "ImmutableX";
  const currentPagePathName = window.location.pathname.split("/")[1];
  const dropDown = {
    dropDownText: "Home",
    title: "Account",
    details: [
      {
        element: <ShoppingBagIcon />,
        text: "Marketplace",
        urlPath: "marketplace",
        itHasSubtab: false,
        subTab: null,
        onClick: () => {
          if (!userId || userId == "undefined") {
            navigate(`/marketplace`);
          } else {
            navigate(`/marketplace/${userId}`);
          }
        },
      },
      {
        element: <CreditCard />,
        text: "Dashboard",
        itHasSubtab: false,
        urlPath: "portfolio",
        subTab: null,
        onClick: () => {
          if (!userId || userId == "undefined") {
            navigate("/sign-in/users");
          }
          navigate(`/portfolio/${userId}`);
        },
      },
      {
        element: <LogOut />,
        text: "Logout",
        urlPath: "logout",
        itHasSubtab: false,
        subTab: null,
        onClick: () => {
          navigate("/");
        },
      },
    ].filter((ele) => !(ele.urlPath == currentPagePathName)),
    onMore: {
      action1: {
        text: "explorer",
        action: () => {
          console.log("onClick explorer");
        },
      },
      action2: {
        text: "blog",
        action: () => {
          console.log("onClick blog");
        },
      },
    },
  };

  return (
    <>
      <AppBar
        OnLogoutClick={actions.OnLogoutClick}
        showCaseText={showCaseText}
        onSearch={actions.onSearch}
        isLeftSideNeeded={isLeftSideNeeded}
        onAccountClick={actions.onAccountClick}
        OnMoreClick={actions.OnMoreClick}
        isAuth={isAuth}
        menuDetails={dropDown}
        showUserDetails={isUserDetailsNeed}
        userDetails={{
          name: firstName + lastName,
          email: email,
          userId: userId,
        }}
      />
    </>
  );
}
