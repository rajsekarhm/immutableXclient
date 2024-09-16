import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataVault } from "../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { userContract } from "../global-store/types/state_types/UserType";
import { createUser } from "../global-store/reducers/UserActions";
import { create } from "../global-store/reducers/CrudOperations";
import { ChangeEvent } from "react";
import { custodianContract } from "../global-store/types/state_types/CustodianType";
import ButtonComponent from "../components/Button";
import { Stack } from "@mui/material";

export const SigUpFormPage = (props: { portal: string }) => {
  const { portal } = props;
  const [isCustodain, setIsCustodian] = useState(false);
  const [user, setUser] = useState(userContract);
  const navigate = useNavigate();
  const [validate, setValidate] = useState(true);
  useEffect(() => {
    if (portal == "custodian") {
      setIsCustodian(true);
      setUser(custodianContract);
    }
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (user.firstname === undefined && user.password === null) {
      if (user.securityId === undefined) {
        navigate(`/account/custodian`);
        return;
      }
      navigate(`/account/users`);
      return;
    }
    dispatch(create(user));
    navigate(`/profile/${user.firstname}`);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    dispatch(createUser(user));
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
                  description: "enter first name",
                  className: "username_class",
                  type: "text",
                  name: "firstname",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "enter last name",
                  className: "username_class",
                  type: "text",
                  name: "lastname",
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
              {isCustodain ? (
                <>
                  <DataVault
                    componentInfo={{
                      defaultValue: undefined,
                      description: "enter orgId",
                      className: "org_class",
                      type: "text",
                      name: "orgId",
                      pattern: "",
                      maxlength: 10,
                    }}
                    handleInput={handleInput}
                  />
                  <DataVault
                    componentInfo={{
                      defaultValue: undefined,
                      description: "enter securityId ",
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
              <div className="form-submit">
                {" "}
                <input
                  type="checkbox"
                  onClick={() => setValidate(false)}
                />{" "}
                <label> accept terms & condition </label>{" "}
              </div>
              <div className="form-group">
                <ButtonComponent
                  description="submit"
                  onclickEvent={handleSubmit}
                  buttonSize="small"
                  isDisabled={validate}
                />
              </div>
              <div className="form-group" style={{ fontFamily: "monospace" }}>
                Already have account ? Please{" "}
                <a
                  onClick={() => {
                    navigate("/signin");
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
