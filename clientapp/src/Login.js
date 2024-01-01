import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [loginInput, setInput] = useState({
    name: " ",
    password: " ",
  });
  const validator = () => {
    let valid = false;
    let username = "";
    const check = JSON.parse(localStorage.getItem("user"));
    if (!check) {
      navigate("./errorPage");
      return valid;
    }
    check.map((users) => {
      if (
        users.name === loginInput.name &&
        users.password === loginInput.password
      ) {
        valid = true;
        username = users.name;
      }
      return true;
    });
    return { isAuth: valid, _username: username };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    let { isAuth, _username } = validator();
    if (isAuth) {
      navigate(`/marketPlace/${_username}`);
    } else {
      navigate("/errorPage");
    }
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
              <h2 className="text-center" style={{fontFamily:"monospace"}}>Login</h2>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <form className="register-form" onSubmit={handleSubmit} action="">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPhonenumber1"
                    style={{fontFamily:"monospace"}}
                    
                  >
                    Enter UserName : 
                  </label>
                  <input
                    className="form-control"
                    type="phonenumber"
                    placeholder="username"
                    style={{fontFamily:"monospace"}}
                    name="name"
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{fontFamily:"monospace"}}
                  >
                    Enter Password :
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    style={{fontFamily:"monospace"}}
                    name="password"
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <div className="form-group">
                  {loading ? (
                    <div className="text-center">
                      <span
                        onClick={() => {
                          navigate("/register");
                        }}
                        className="text-danger"
                      >
                        {" "}
                        Kindly Register
                      </span>
                      <br />
                      <div
                        className="spinner-border text-primary "
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <div className="text-center">
                      <input
                        type="submit"
                        className="btn btn-login btn-primary"
                        value="Login"
                        style={{fontFamily:"monospace"}}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
