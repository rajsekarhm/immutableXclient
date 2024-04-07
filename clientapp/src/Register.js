import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer } from "./components/InputContainer";
import { Popup } from "./components/PopUp";
export const Registers = () => {
  const navigate = useNavigate();
  const [requiredInput,setRequiredInput] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const [userData, setUserData] = useState({
    name: {
      name: "",
      isname: false,
    },
    password: {
      password: "",
      ispassword: false,
    },
    email: {
      email: "",
      isemail: false,
    },
  });

  const handleChange = (event) => {
    event.preventDefault();
    setRequiredInput(true)
    setErrorMessage("nakku")
    console.log(userData);
    // debugger;
  };

  useEffect(()=>{
    console.log('consoled')
  })
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserData((preState) => {
      return {
        ...preState,
        [name]: {
          ...preState[name],
          [name]: value,
          ["is" + name]: true,
        },
      };
    });
  };

  return (
    <section className="container center register-block">
      <div className="container">
        <div className="row ">
          <div className="col register-sec">
          <Popup isOpen={requiredInput} onClose={() => {}} children={errorMessage}/>
            <h2 className="text-center" style={{ fontFamily: "monospace" }}>
              create Account
            </h2>
            <form className="register-form" onSubmit={handleChange} action="">
              <InputContainer
                userData={userData}
                handleInput={handleInput}
                id="name"
                inputDetails={{
                  description: "Enter username",
                  errorMessage: "user required",
                }}
              />
              <InputContainer
                userData={userData}
                handleInput={handleInput}
                id="password"
                inputDetails={{
                  description: "Enter password",
                  errorMessage: "password required :(",
                }}
              />
              <InputContainer
                userData={userData}
                handleInput={handleInput}
                id="email"
                inputDetails={{
                  description: "Enter Mail",
                  errorMessage: "email is require ;(",
                }}
              />
              <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-login btn-primary"
                    value="Register"
                    style={{ fontFamily: "monospace" }}
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
