import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";

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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block text-sm text-gray-700">Enter your Email</label>
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
                className="w-full rounded-md bg-black text-white py-2 text-sm font-medium shadow hover:bg-gray-800 transition"
                onClick={() => {}}
              >
                Submit
              </button>
            </>
          )}

          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              className="text-blue-600 hover:text-blue-500"
              onClick={() => setForgot(!forgot)}
            >
              {forgot ? "Back to Login" : "Forgot password?"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black text-white py-2 text-sm font-medium shadow hover:bg-gray-800 transition"
          >
            Sign in
          </button>

          <div className="text-sm text-gray-700 text-center mt-4">
            Are you {portal === "custodian" ? "a user" : "an agent"}?{" "}
            <button
              type="button"
              onClick={handleCustodianPortal}
              className="text-blue-600 hover:text-blue-500 font-medium"
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
