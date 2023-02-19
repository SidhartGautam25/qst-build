import React from "react";
import "./error.css";
import Computer from "../../assets/Computer.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error_wrapper">
        <div className="error_image">
          <img className="errimg2" src={Computer} alt="" />
        </div>
        <div className="error_text_wrapper">
          <div className="error_text">
            <h1 className="gradient__text">
              Looks like you forgot to login :D
            </h1>
          </div>
        </div>
        <Link to="/login">
          <div className="error_button">
            <p>Click Here to <bold>Login</bold></p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Error;
