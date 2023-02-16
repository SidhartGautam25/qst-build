import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-up-form">
            
              <u><h1 className="title">Sign-Up</h1></u>
              <span className="checkmark">
                

                <h4>I want to join as a:</h4>
              </span>
              <br />
              <div className="selector">
                <span className="checkmark2">
                  <h2>
                    Student{" "}
                    <input type="radio" name="check"  />
                  </h2>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <span className="checkmark2">
                  <h2>
                    Tutor <input type="radio" name="check" />
                  </h2>
                  
                </span>
                
                
                
              </div>
              <br />
              <br />

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
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="correo"
                  autocomplete="email"
                  placeholder="Email"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="contraseña"
                  autocomplete="current-password"
                  placeholder="Password"
                  id="id_reg"
                  required="yes"
                />
              </div>

              <a
                href="https://inprivy.io/password-generator?ref=generator&gclid=CjwKCAiA_6yfBhBNEiwAkmXy53ZesnzZj3L3jDRTz9Z7cX1CshvSTgERUabcD-ANWm2tuc6Y9U3DxRoCm4cQAvD_BwE"
                className="pass"
                target="_blank"
              >
                Generate a strong password
              </a>
             
              <label className="check">
                <input type="checkbox" checked="checked" />
                <span className="checkmark">
                  I accept the <a href="#">terms and services</a>
                </span>
              </label>
              <input
                type="submit"
                value="Create account"
                className="btn solid"
              />
              <p className="social-text">You can register with:</p>
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
              <h2>Already have an account?</h2>
              <p>
                Login to see your notifications and post your favorite photos
              </p>
              <Link to="/login">
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </Link>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
