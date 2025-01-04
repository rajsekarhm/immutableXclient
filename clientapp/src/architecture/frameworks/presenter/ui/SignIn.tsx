import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { InputBox } from "../../components/InputBox";
import Button from "../../components/Button";
const SignInPage = (props: any) => {
  const [forgot, setForgot] = useState(false);
  const { portal } = props;
  const navigate = useNavigate();
  const [loginInput, setInput] = useState({
    username: null,
    password: null,
    orgID: undefined,
  });
  const handleCustodianPortal = () => {
    setForgot(false);
    if (portal == "custodian") {
      navigate("/sign-in/users");
      return;
    }
    if (portal == "users") {
      navigate("/sign-in/custodian");
    }
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    /**
     * need to handle with authentication with server and password
     */
    if (loginInput.username && loginInput.password) {
      navigate(`profile/${loginInput.username}`);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...loginInput, [event.target.name]: event.target.value });
  };
  return (
    <div
      style={{ background: "white", height: "150vh", msOverflowY: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
        }}
      >
        <section
          style={{
            width: "400px",
            padding: "20px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <br/>
          <div>
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                className: "name_class",
                type: "name",
                name: "username",
                description: "Enter name",
                pattern: "",
                maxlength: 10,
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
                maxlength: 10,
              }}
              handleInput={handleChange}
            />
            {portal === "custodian" ? (
              <InputBox
                componentInfo={{
                  defaultValue: undefined,
                  className: "orgId_class",
                  type: "password",
                  name: "orgID",
                  description: "Enter org ID",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleChange}
              />
            ) : null}
            {forgot ? (
              <>
                {" "}
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Enter your Mail
                </label>
                <InputBox
                  componentInfo={{
                    defaultValue: undefined,
                    className: "forgotPassword_class",
                    type: "text",
                    name: "forgot_password",
                    description: "Enter yout mail",
                    pattern: "",
                    maxlength: 10,
                  }}
                  handleInput={() => {}}
                />{" "}
                <button
                  className="flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => {}}
                >
                  Submit
                </button>
              </>
            ) : null}
            <br />
            <button
              className="text-sm font-medium text-blue-600 hover:text-blue-500 item-left"
              onClick={() => {
                if (!forgot) {
                  setForgot(true);
                } else {
                  setForgot(false);
                }
              }}
            >
              {" "}
              Forgot password ?{" "}
            </button>
            <br />
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
            <br />
            <label className="ml-2 block text-sm text-gray-900">
              Are you {portal === "custodian" ? "users" : "agent"}{" "}
              <button
                onClick={handleCustodianPortal}
                type="submit"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 item-left"
              >
                Sign in
              </button>
            </label>
            <br />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignInPage;
