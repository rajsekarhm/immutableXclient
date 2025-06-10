import { SignIn } from "@clerk/clerk-react";

function ExternalSignIn() {
  return (
    <div className="relative flex flex-col gap-4 items-center justify-center px-4">
      <SignIn />
    </div>
  );
}

export default ExternalSignIn;
