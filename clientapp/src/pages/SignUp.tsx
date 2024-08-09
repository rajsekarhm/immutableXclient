import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataVault } from "../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { userContract } from "../global-store/types/stateType/UserType";
import { createUser } from "../global-store/reducers/UserActions";
import { create } from "../global-store/reducers/crudOperations";
import { ChangeEvent } from "react";

export const SigUpFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(userContract);
  const handleSubmit = (event: any) => {
    if (user.name === undefined) {
      navigate(`/account/users`);
    }
    event.preventDefault();
    dispatch(create(user));
    navigate(`/profile/${user.name}`);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(createUser({ ...user, [name]: value }));
    setUser({ ...user, [name]: value });
  };

  return (
    <section className="container center register-block">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
            <h2 className="text-center" style={{ fontFamily: "monospace" }}>
              Enter your credentials to create ..
            </h2>
            <form className="register-form" action="">
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "enter name",
                  className: "username_class",
                  type: "text",
                  name: "name",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "enter password",
                  className: "pass_class",
                  type: "password",
                  name: "password",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "enter mail",
                  className: "mail_class",
                  type: "text",
                  name: "email",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "enter phone number ",
                  className: "contact_class",
                  type: "text",
                  name: "phoneNumber",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleInput}
              />
              <div className="form-group">
                <button onClick={handleSubmit}>{"submit"}</button>
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
