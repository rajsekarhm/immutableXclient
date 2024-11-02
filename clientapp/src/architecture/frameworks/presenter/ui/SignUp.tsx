import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataVault } from "../../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import ButtonComponent from "../../components/Button";
import UserEntity from "../../../domains/entities/UserEntity";
import CustodianEntity from "../../../domains/entities/CustodianEntity";
import { etore } from "../../../controllers/_store";

export const SigUpFormPage = (props: { portal: string }) => {
  console.log(etore.getActions());
  const { users_create, test_create } = etore.getActions();
  const { portal } = props;
  const [isCustodain, setIsCustodian] = useState(false);
  const [user, setUser] = useState(UserEntity.initialState().User);
  const navigate = useNavigate();
  const [validate, setValidate] = useState(true);
  useEffect(() => {
    if (portal == "custodian") {
      setIsCustodian(true);
      setUser(CustodianEntity.initialState().Custodian);
    }
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (user.firstname === undefined && user.password === null) {
      if (user.securityId === undefined) {
        navigate(`/errorPage`);
        return;
      }
      navigate(`/account/users`);
      return;
    }
    dispatch(users_create(user));
    dispatch(test_create({ actions: 2 }));
    navigate(`/portfolio/${user.firstname}`);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    //  dispatch(createUser(user));
  };
  return (
    <section className="container center register-block">
      <div
        className="register -container"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <div className="row ">
          <div className="col register-sec">
            <h2 className="text-center" style={{ fontFamily: "monospace" }}>
              Enter your credentials to create ..
            </h2>
            <form className="register-form" action="">
              {/* <Stack> */}
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "Enter first name",
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
                  description: "Enter last name",
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
                  description: "Enter password",
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
                  description: "Enter mail",
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
                  description: "Enter phone number ",
                  className: "contact_class",
                  type: "text",
                  name: "phoneNumber",
                  pattern: "",
                  maxlength: 10,
                }}
                handleInput={handleInput}
              />
              <DataVault
                componentInfo={{
                  defaultValue: undefined,
                  description: "Enter government Id",
                  className: "governmentId_class",
                  type: "text",
                  name: "governmentId",
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
                      description: "Enter orgId",
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
              {/* </Stack> */}
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
              <div>
                <br />
                <ButtonComponent
                  buttonSize="small"
                  description="signup with google"
                  onclickEvent={() => console.log("lol")}
                />
                <br />
                <ButtonComponent
                  buttonSize="small"
                  description="signup with apple"
                  onclickEvent={() => console.log("lol")}
                />
                <br />
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


export default SigUpFormPage