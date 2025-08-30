import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import "../css/SignIn.css";

const SignInPage = ({ portal }: { portal: string }) => {
  const [forgot, setForgot] = useState(false);
  const [loginInput, setInput] = useState({
    username: "",
    password: "",
    orgID: "",
  });
  const navigate = useNavigate();

  const handleCustodianPortal = () => {
    setForgot(false);
    if (portal === "custodian") {
      navigate("/sign-in/users");
    } else {
      navigate("/sign-in/custodian");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (loginInput.username && loginInput.password) {
      navigate(`profile/${loginInput.username}`);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...loginInput, [event.target.name]: event.target.value });
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-header">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "name_class",
              type: "text",
              name: "username",
              description: "Enter username",
              pattern: "",
              maxlength: 50,
            }}
            handleInput={handleChange}
          />
          <InputBox
            componentInfo={{
              defaultValue: undefined,
              className: "pass_class",
              type: "password",
              name: "password",
              description: "Enter password",
              pattern: "",
              maxlength: 50,
            }}
            handleInput={handleChange}
          />
          {portal === "custodian" && (
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                className: "orgId_class",
                type: "text",
                name: "orgID",
                description: "Enter Org ID",
                pattern: "",
                maxlength: 50,
              }}
              handleInput={handleChange}
            />
          )}

          {forgot && (
            <>
              <label className="signin-label">Enter your Email</label>
              <InputBox
                componentInfo={{
                  defaultValue: undefined,
                  className: "forgotPassword_class",
                  type: "email",
                  name: "forgot_password",
                  description: "Enter your email",
                  pattern: "",
                  maxlength: 50,
                }}
                handleInput={() => {}}
              />
              <button
                type="button"
                className="signin-button"
                onClick={() => {}}
              >
                Submit
              </button>
            </>
          )}

          <div className="signin-forgot">
            <button
              type="button"
              className="signin-link"
              onClick={() => setForgot(!forgot)}
            >
              {forgot ? "Back to Login" : "Forgot password?"}
            </button>
          </div>

          <button type="submit" className="signin-button">
            Sign in
          </button>

          <div className="signin-switch">
            Are you {portal === "custodian" ? "a user" : "an agent"}?{" "}
            <button
              type="button"
              onClick={handleCustodianPortal}
              className="signin-link"
            >
              Switch Portal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;