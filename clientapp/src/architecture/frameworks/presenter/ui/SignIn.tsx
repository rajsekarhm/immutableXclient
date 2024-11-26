import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { InputBox } from "../../components/InputBox";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { motion } from "framer-motion";
const SignInPage = (props: any) => {
  const [forgot, setForgot] = useState(false);
  const { portal } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInput, setInput] = useState({
    username: null,
    password: null,
    orgID: undefined,
  });
  const handleCustodianPortal = () => {
    setForgot(false)
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
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div style={{background:'white', height:'150vh', msOverflowY:'hidden'}}>
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
          <div>
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
            />
            <br />
            <label>
              {" "}
              Are you {portal === "custodian" ? "users" : "agent"}  
              <a onClick={handleCustodianPortal}>
               {""} Sign in {" "}
              </a>Here
            </label>
            <br />
            <label>
              <button onClick={() => setForgot(true)}>
                {" "}
                Forgot password ?{" "}
              </button>
            </label>
            <br />
            {forgot ? (
              <>
                {" "}
                <br/>
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
              />  <Button
              description="Submit"
              onclickEvent={() => {}}
            />{" "}
          </>
            ) : null}
          </div>
        </section>
      </div>
    </div>
    </motion.div>
  );
};

export default SignInPage;
