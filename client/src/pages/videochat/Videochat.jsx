import React from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./videochat.css";

const Videochat = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      <div className="wrapper">
        <div className="wrapper-video">
          <div className="tutor">displayT</div>
          <div className="buttons-bar">
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="button">
              <i class="fa-solid fa-microphone"></i>
            </div>
            &nbsp;&nbsp;&nbsp;
          </div>
          <br />
          <br />
        </div>
        <div className="wrapper-chat">
          <div className="chat">
            <div className="student">displayS</div>
            <div className="text">
              <i className="icons fas fa-user"></i>
              <input
                className="input-field2"
                type="text"
                placeholder="Start typing..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videochat;
