import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import Button from "../../components/Button";
import UserEntity from "../../../domains/entities/UserEntity";
import CustodianEntity from "../../../domains/entities/CustodianEntity";
import useUserController from "../hooks/useAccount";
import useAuth from "../hooks/useAuth";
import "../css/SignUp.css";
import SignUpOrSignInButton from "../../components/utils/CornerSignUp";

const SignUpFormPage = ({ portal }: { portal: string }) => {
  const navigate = useNavigate();
  const controller = useUserController();
  const { isAuthenticated } = useAuth();
  const [validate, setValidate] = useState(false);
  const [isCustodian, setIsCustodian] = useState(portal === "custodian");

  const _initialUser =
    portal === "custodian"
      ? CustodianEntity.initialState()
      : UserEntity.initialState();

  const [user, setUser] = useState(_initialUser);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const SignIn = () => (
    <SignUpOrSignInButton name="Sign-In" routerUrl="/signin/users" />
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (user?.email && user?.phoneNumber) {
        const result = await controller.execute('createUser', user);
        if (result?.status === "CREATED") {
          navigate(`/marketplace/${result?.data?.user?.userId || user.securityId}`);
        } else {
          navigate('/marketplace');
        }
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="signup-container">
      <SignIn/>
      <div className="signup-card">
        <h2 className="signup-header">Sign Up for an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "name_class",
              type: "text",
              name: "firstName",
              description: "Enter your First Name",
              pattern: undefined,
              maxlength: 50,
            }}
            handleInput={handleInput}
          />
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "name_class",
              type: "text",
              name: "lastName",
              description: "Enter your Last Name",
              pattern: undefined,
              maxlength: 50,
            }}
            handleInput={handleInput}
          />
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "email_class",
              type: "email",
              name: "email",
              description: "Enter your email",
              pattern: undefined,
              maxlength: 50,
            }}
            handleInput={handleInput}
          />
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "phone_class",
              type: "text",
              name: "phoneNumber",
              description: "Enter your phone number",
              pattern:undefined,
              maxlength: 15,
            }}
            handleInput={handleInput}
          />
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "security_class",
              type: "text",
              name: "securityId",
              description: "Enter your Security Id",
              pattern: undefined,
              maxlength: 15,
            }}
            handleInput={handleInput}
          />
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "password_class",
              type: "password",
              name: "password",
              description: "Enter your Password",
              pattern: undefined,
              maxlength: 15,
            }}
            handleInput={handleInput}
          />
          {isCustodian && (
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                className: "orgId_class",
                type: "text",
                name: "organizationID",
                description: "Enter your Organization ID",
                pattern: undefined,
                maxlength: 50,
              }}
              handleInput={handleInput}
            />
          )}

          <div className="signup-terms">
            <input
              type="checkbox"
              id="terms"
              checked={validate}
              onChange={() => setValidate((prev) => !prev)}
              className="signup-checkbox"
            />
            <label htmlFor="terms" className="signup-label">
              I accept the terms & conditions
            </label>
          </div>

          <Button
            description="Submit to Create"
            onclickEvent={handleSubmit}
            isDisabled={!validate}
          />

          <Button
            description="Login with Email"
            onclickEvent={() => console.log("Email login")}
          />

          <div className="signup-footer">
            Already have an account?{" "}
            <a
              className="signup-link"
              onClick={() => navigate("/signin/users")}
            >
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormPage;