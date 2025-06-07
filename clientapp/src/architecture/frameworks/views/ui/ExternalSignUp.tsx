import { SignUp } from "@clerk/clerk-react";

function ExternalSignUp() {
  return (
    <div className="relative flex flex-col gap-4 items-center justify-center px-4">
      <SignUp />
    </div>
  );
}

export default ExternalSignUp;
