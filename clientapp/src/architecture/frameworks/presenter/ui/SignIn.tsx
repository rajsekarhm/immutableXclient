import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { InputBox } from "../../components/InputBox";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { actions_store } from "../../../controllers/_store";
const SignInPage = (props: any) => {
  const [forgot, setForgot] = useState(false);
  const { portal } = props;
  const dispatch = useDispatch();
  const {users_login} = actions_store.getActions();
  const navigate = useNavigate();
  const [loginInput, setInput] = useState({
    username: null,
    password: null,
    orgID:undefined
  });
  const handleCustodianPortal = () => {
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
    dispatch(users_login(loginInput))
    if (loginInput.username && loginInput.password) {
      navigate(`profile/${loginInput.username}`);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...loginInput, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <section className="register-block">
        <div
          className="login-container"
          style={{ overflowY: "auto", maxHeight: "100vh" }}
        >
          <div className="row ">
            <div className="col register-sec">
              <h2 className="text-center" style={{ fontFamily: "monospace" }}>
                Login
              </h2>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
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
              <Button
                description="sign in"
                onclickEvent={handleSubmit}
                buttonSize="small"
              />
              <br />
              <br />
              <label>
                {" "}
                are you {portal === "custodian" ? "users" : "agent"} Login Here
                <Button
                  description="Here"
                  onclickEvent={handleCustodianPortal}
                  buttonSize="small"
                />
              </label>
              <br />
              <label>
                <button onClick={() => setForgot(true)}>
                  {" "}
                  forgot password ?{" "}
                </button>
              </label>
              <br />
              {forgot ? (
                <>
                  {" "}
                  <input placeholder="Enter email address"></input>{" "}
                  <Button
                    description="Submit"
                    onclickEvent={() => {}}
                    buttonSize="small"
                  />{" "}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
