import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import Button from "../../components/Button";
import UserEntity from "../../../domains/entities/UserEntity";
import CustodianEntity from "../../../domains/entities/CustodianEntity";
import { actions_store } from "../../../controllers/_store";
import Typography from "@mui/joy/Typography";
import Mail from "@mui/icons-material/Mail";

export const SigUpFormPage = (props: { portal: string }) => {
  const { users_create, custodain_create } = actions_store.getActions();
  const { portal } = props;
  const [isCustodain, setIsCustodian] = useState(false);
  const _userstate = portal === "custodian" ? CustodianEntity.initialState().Custodian : UserEntity.initialState().User;
  const [user, setUser] = useState(_userstate);
  const navigate = useNavigate();
  const [validate, setValidate] = useState(true);

  useEffect(() => {
    if (portal === "custodian") {
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
      navigate(`/sign-in/users`);
      return;
    }
    if (portal === "users") {
      dispatch(users_create(user));
    }
    if (portal === "custodian") {
      dispatch(custodain_create(user));
    }
    navigate(`/portfolio/${user.firstname}`);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div style={{background:'white', height:'150vh', msOverflowY:'hidden'}}>
    <div style={{height:"20vh", display:"flex", justifyContent:"center" , alignItems: "center", fontFamily:
      "sans-serif"
    }}>   <Typography> Enter your credentials</Typography>
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh"}}>
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
              name: "firstname",
              pattern: "",
              maxlength: 10,
              style:{}
            }}
            handleInput={handleInput}
          />
          <InputBox
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
          <InputBox
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
          <InputBox
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
            <input type="checkbox" onClick={() => {if(validate){setValidate(false)}if(validate == false){setValidate(true)}}} />{" "}
            <label> accept terms & condition </label>
          </div>
          <div className="form-group">
            <Button
              description="submit"
              onclickEvent={handleSubmit}
              isDisabled={validate}
            />
          </div>
          <div>
            <br />
            <Button
              description={<> <Mail/> Login with Email </>}
              onclickEvent={() => console.log("lol")}
            />
          </div>
          <div  style={{ fontFamily: "monospace" }}>
            Already have account? Please{" "}
            <a
              onClick={() => {
                navigate("/sign-in/users");
              }}
              style={{ fontFamily: "monospace" }}
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
