import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { DataVault } from "../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../global-store/reducers/crudOperations";
export const SignInPage = (props: any) => {
  const { portal } = props;
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInput, setInput] = useState({
    username: null,
    password: null,
  });
  const handleCustodianPortal = () => {
    if (portal == "custodian") {
      navigate("/signin");
      return;
    }
    if (portal == "user") {
      navigate("/custodian");
    }
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(loginInput);
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
        <div className="container">
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
                  description: "enter name",
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
                  description: "enter password",
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
                    description: "enter org ID",
                    pattern: "",
                    maxlength: 10,
                  }}
                  handleInput={handleChange}
                />
              ) : null}
              <button onClick={handleSubmit}> sign in </button>
              <br />
              <br />
              <label>
                {" "}
                Are your {portal === "custodian" ? "user" : "Agent"} LoginIn
                <button onClickCapture={handleCustodianPortal}>
                  Here
                </button> ?{" "}
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
