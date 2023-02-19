import React from "react";
import "./error.css";
import error from "../../assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error_wrapper">
        <div className="error_image">
          <img className="errimg" src={error} alt="" />
        </div>
        <div className="error_text_wrapper">
          <div className="error_text">
            <h1 className="gradient__text">
              Whoops! Something went wrong. Please try again!
            </h1>
          </div>
        </div>
        <Link to="/">
          <div className="error_button">
            <p>Back to Homepage</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Error;
