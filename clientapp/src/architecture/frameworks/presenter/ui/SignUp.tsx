import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import Button from "../../components/Button";
import UserEntity from "../../../domains/entities/UserEntity";
import CustodianEntity from "../../../domains/entities/CustodianEntity";
import { createUser } from "../../../controllers/actions/UserActions";
import { AppDispatch } from "../../../controllers/store";
import { useSignUp } from "@clerk/clerk-react";
import { Mail } from 'lucide-react';
export const SigUpFormPage = (props: { portal: string }) => {
  const { portal } = props;
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verficationCode, setVerficationCode] = useState<string>("");
  const [isCustodain, setIsCustodian] = useState(false);
  const _userstate =
    portal === "custodian"
      ? CustodianEntity.initialState().Custodian
      : UserEntity.initialState().User;
  const [user, setUser] = useState(_userstate);
  const navigate = useNavigate();
  const [validate, setValidate] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const onPressMailVerify = async (event: any) => {
    event.preventDefault();
    if (isLoaded) {
      navigate(`/portfolio/${user.governmentID}`);
    }
    try {
      await signUp?.attemptEmailAddressVerification({ code: verficationCode });
    } catch (err) {}
  };

  const onPressPhoneVerfiy = async () => {
    if (isLoaded) {
      navigate(`/portfolio/${user.governmentID}`);
    }
    try {
      await signUp?.attemptPhoneNumberVerification({ code: verficationCode });
    } catch (err) {}
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const { email, phonenumber } = user;
      if (email && phonenumber) {
        await signUp?.create({ emailAddress: email });
        await signUp?.create({ phoneNumber: phonenumber });
      }
    } catch (err) {}
    if (user.firstName === undefined && user.password === null) {
      if (user.securityId === undefined) {
        navigate(`/gotissue`);
        return;
      }
      navigate(`/sign-in/users`);
      return;
    }
    if (isLoaded) {
      if (portal === "users") {
        dispatch(createUser(user));
      }
      if (portal === "custodian") {
        dispatch(createUser(user));
      }
      navigate(`/portfolio/${user.governmentID}`);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div
      style={{ background: "white", height: "150vh", msOverflowY: "hidden" }}
    >
      <div
        style={{
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        {" "}
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Sign up to Create Account
        </h2>
      </div>
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
          <form>
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                description: "Enter first name",
                className: "username_class",
                type: "text",
                name: "firstName",
                pattern: "",
                maxlength: 10,
                style: {},
              }}
              handleInput={handleInput}
            />
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                description: "Enter last name",
                className: "username_class",
                type: "text",
                name: "lastName",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={handleInput}
            />
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                description: "Enter password",
                className: "pass_class",
                type: "password",
                name: "password",
                pattern: "",
                maxlength: 20,
              }}
              handleInput={handleInput}
            />
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                description: "Enter mail",
                className: "mail_class",
                type: "text",
                name: "email",
                pattern: "",
                maxlength: 40,
              }}
              handleInput={handleInput}
            />
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                description: "Enter phone number ",
                className: "contact_class",
                type: "text",
                name: "phoneNumber",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={handleInput}
            />
            <InputBox
              componentInfo={{
                defaultValue: undefined,
                description: "Enter government Id",
                className: "governmentID_class",
                type: "text",
                name: "governmentID",
                pattern: "",
                maxlength: 10,
              }}
              handleInput={handleInput}
            />
            {isCustodain ? (
              <>
                <InputBox
                  componentInfo={{
                    defaultValue: undefined,
                    description: "Enter orgId",
                    className: "org_class",
                    type: "text",
                    name: "orgId",
                    pattern: "",
                    maxlength: 10,
                  }}
                  handleInput={handleInput}
                />
                <InputBox
                  componentInfo={{
                    defaultValue: undefined,
                    description: "Enter securityId ",
                    className: "security_class",
                    type: "text",
                    name: "securityId",
                    pattern: "",
                    maxlength: 10,
                  }}
                  handleInput={handleInput}
                />
              </>
            ) : null}
            <div>
              <input
                type="checkbox"
                onClick={() => {
                  if (validate) {
                    setValidate(false);
                  }
                  if (validate == false) {
                    setValidate(true);
                  }
                }}
              />{" "}
              <label> accept terms & condition </label>
            </div>
            <Button
              description={"submit to create"}
              onclickEvent={handleSubmit}
              isDisabled={validate}
            />
            <div>
              <br />
              <Button
                description={
                  <>
                    {" "}
                    <Mail /> Login with Email{" "}
                  </>
                }
                onclickEvent={() => console.log("lol")}
              />
            </div>
            <div style={{ fontFamily: "monospace" }}>
              Already have account? Please{" "}
              <a
                onClick={() => {
                  navigate("/sign-in/users");
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-500 item-left"
              >
                Login
              </a>{" "}
              here
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SigUpFormPage;
