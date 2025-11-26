import React from "react";
import { useNavigate } from "react-router-dom";
interface SignUpOrSignInButton {
  routerUrl: string;
  name: string;
}
function SignUpOrSignInButton(props: SignUpOrSignInButton) {
  const { routerUrl, name } = props;
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate(routerUrl);
  };
  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full font-medium shadow hover:scale-105 transition-transform"
        onClick={navigateLogin}
      >
        {name}
      </button>
    </div>
  );
}

export default SignUpOrSignInButton;
