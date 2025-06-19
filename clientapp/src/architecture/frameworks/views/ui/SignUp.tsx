import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import UserEntity from "../../../domains/entities/UserEntity";
import CustodianEntity from "../../../domains/entities/CustodianEntity";
import { createUser } from "../../../adapters/actions/UserActions";
import { AppDispatch } from "../../../adapters/store";
import { useSignUp } from "@clerk/clerk-react";
import { Mail } from "lucide-react";

const SigUpFormPage = ({ portal }: { portal: string }) => {
  // const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [verficationCode, setVerficationCode] = useState("");
  const [validate, setValidate] = useState(false);
  const [isCustodian, setIsCustodian] = useState(portal === "custodian");

  const _initialUser =
    portal === "custodian"
      ? CustodianEntity.initialState().Custodian
      : UserEntity.initialState().User;

  const [user, setUser] = useState(_initialUser);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (user?.email && user?.phoneNumber) {
        dispatch(createUser(user));
        navigate(`marketplace/${user.governmentID}`)
        // await signUp?.create({ emailAddress: user.email });
        // await signUp?.create({ phoneNumber: user.phoneNumber });
      }
    } catch (error) {
      console.log("Sign-up failed:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Sign up to Create Account
      </h2>

      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <InputBox
          componentInfo={{
            description: "Enter first name",
            type: "text",
            name: "firstName",
            maxlength: 10,
            className: "",
          }}
          handleInput={handleInput}
        />
        <InputBox
          componentInfo={{
            description: "Enter last name",
            type: "text",
            name: "lastName",
            maxlength: 10,
            className: "",
          }}
          handleInput={handleInput}
        />
        <InputBox
          componentInfo={{
            description: "Enter password",
            type: "password",
            name: "password",
            maxlength: 20,
            className: "",
          }}
          handleInput={handleInput}
        />
        <InputBox
          componentInfo={{
            description: "Enter email",
            type: "text",
            name: "email",
            maxlength: 40,
            className: "",
          }}
          handleInput={handleInput}
        />
        <InputBox
          componentInfo={{
            description: "Enter phone number",
            type: "text",
            name: "phoneNumber",
            maxlength: 10,
            className: "",
          }}
          handleInput={handleInput}
        />
        <InputBox
          componentInfo={{
            description: "Enter government ID",
            type: "text",
            name: "governmentID",
            maxlength: 10,
            className: "",
          }}
          handleInput={handleInput}
        />

        {isCustodian && (
          <>
            <InputBox
              componentInfo={{
                description: "Enter org ID",
                type: "text",
                name: "orgId",
                maxlength: 10,
                className: "",
              }}
              handleInput={handleInput}
            />
            <InputBox
              componentInfo={{
                description: "Enter security ID",
                type: "text",
                name: "securityId",
                maxlength: 10,
                className: "",
              }}
              handleInput={handleInput}
            />
          </>
        )}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={validate}
            onChange={() => setValidate((prev) => !prev)}
            className="h-4 w-4"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I accept the terms & conditions
          </label>
        </div>

        <Button
          description="Submit to Create"
          onclickEvent={handleSubmit}
          isDisabled={!validate}
        />

        <Button
          description= "Login with Email"
          onclickEvent={() => console.log("Email login")}
        />

        <div className="pt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/sign-in/users")}
          >
            Login here
          </a>
        </div>
      </form>
    </div>
  );
};

export default SigUpFormPage;
