import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataVault } from "../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { userContract } from "../global-store/types/stateContract/UserType";
import { createUser, getUserDetails } from "../global-store/reducers/UserActions";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(userContract);
  const resultBha = useSelector((state) => state.userActions)
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(user));
    console.log(resultBha)
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((preState) => {
      return { ...preState, [name]: value };
    });
  };

  return (
    <section className="container center register-block">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
            <h2 className="text-center" style={{ fontFamily: "monospace" }}>
              create Account
            </h2>
            <form className="register-form" action="">
              <DataVault
                componentInfo={{
                  description: "enter name",
                  className: "username_class",
                  type: "text",
                  name: "name",
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  description: "enter password",
                  className: "pass_class",
                  type: "password",
                  name: "password",
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  description: "enter mail",
                  className: "mail_class",
                  type: "text",
                  name: "email",
                }}
                handleInput={handleInput}
              />
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-login btn-primary"
                  value="Register"
                  onClick={handleSubmit}
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group" style={{ fontFamily: "monospace" }}>
                Already have account ? Please{" "}
                <a
                  href="# "
                  onClick={() => {
                    navigate("/Login");
                  }}
                  style={{ fontFamily: "monospace" }}
                >
                  Login
                </a>{" "}
                here
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
