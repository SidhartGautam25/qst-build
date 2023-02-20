import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { loginCall } from "../../logincall";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleClick} className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  autocomplete="username"
                  placeholder="Username"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  autocomplete="current-password"
                  placeholder="Password"
                  id="id_password"
                  required="yes"
                />
              </div>

              <a className="pass" href="#">
                Forgot your password?
              </a>
              <button type="submit" value="Sign in" className="btn solid">Submit</button>
              <p className="social-text">You can login with:</p>
              <div className="social-media">
                <a
                  href="#"
                  className="social-icon"
                  aria-label="Register with Google"
                >
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h2>You don't have an account?</h2>
              <p>
                Create your account right now to get your doubts cleared in no time!
              </p>
              <Link to="/signup">
                <button className="btn transparent" id="sign-up-btn">
                 Signup
                </button>
              </Link>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Login;
