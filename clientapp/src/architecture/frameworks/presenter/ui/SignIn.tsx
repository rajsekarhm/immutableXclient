import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { DataVault } from "../../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../../../global-store/reducers/CrudOperations";
import ButtonComponent from "../../components/Button";
export const SignInPage = (props: any) => {
  const [forgot, setForgot] = useState(false);
  const { portal } = props;
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInput, setInput] = useState({
    username: null,
    password: null,
  });
  const handleCustodianPortal = () => {
    if (portal == "custodian") {
      navigate("/login/users");
      return;
    }
    if (portal == "users") {
      navigate("/login/custodian");
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
    //   fetch('http://localhost:9000/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name:loginInput.name,password:loginInput.password })
    // })
    // .then((result) => {
    //     return result.json();
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    //   if (false) {
    //     navigate(`/marketPlace/${loginInput.name}`);
    //   } else {
    //     navigate("/errorPage");
    //   }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...loginInput, [event.target.name]: event.target.value });
  };
  return (
    <div className="container center mb-5 bg-black">
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
              <DataVault
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
              <DataVault
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
                <DataVault
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
              <ButtonComponent
                description="sign in"
                onclickEvent={handleSubmit}
                buttonSize="small"
              />
              <br />
              <br />
              <label>
                {" "}
                are you {portal === "custodian" ? "users" : "agent"} Login Here
                <ButtonComponent
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
                  <ButtonComponent
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
