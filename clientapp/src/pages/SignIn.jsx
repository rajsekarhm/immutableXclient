import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { DataVault } from "../components/DataVault";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../global-store/reducers/crudOperations";
export const SignIn = () => {
  const dispatch = useDispatch();
  const [isAgent,setAgent] =  useState(false)
  const navigate = useNavigate();
  const [loginInput, setInput] = useState({
    name: " ",
    password: " ",
  });
  // const validator = () => {
  //   let valid = false;
  //   let username = "";
  //   const check = JSON.parse(localStorage.getItem("user"));
  //   if (!check) {
  //     navigate("./errorPage");
  //     return valid;
  //   }
  //   check.map((users) => {
  //     if (
  //       users.name === loginInput.name &&
  //       users.password === loginInput.password
  //     ) {
  //       valid = true;
  //       username = users.name;
  //     }
  //     return true;
  //   });
  //   return { isAuth: valid, _username: username };
  // };
  const handleCustodianPortal = () => {
    navigate("/custodian");
    setAgent(true)
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
  const handleChange = (event) => {
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
                  className: "name_class",
                  type: "name",
                  name: "username",
                  description: "enter name",
                }}
                handleInput={handleChange}
              />
              <DataVault
                componentInfo={{
                  className: "pass_class",
                  type: "password",
                  name: "password",
                  description: "enter password",
                }}
                handleInput={handleChange}
              />
              {
                isAgent ? <DataVault
                componentInfo={{
                  className: "orgId_class",
                  type: "password",
                  name: "orgID",
                  description: "enter org ID",
                }}
                handleInput={handleChange}
              /> : null
              }
              <button onClick={handleSubmit}> sign in </button>
              <br />
              <br />
              <label>
                {" "}
                Are your agent LoginIn{" "}
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
