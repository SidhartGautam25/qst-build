import React from "react";
import SingleNotifi from "../../components/notification/SingleNotifi";
import "./notifications.css";

const Notification = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="header">
        <div className="header__left">
          <span className="material-icons">QStack </span>
        </div>

        <div className="header__middle">
          <span className="material-icons">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="text" placeholder="Search Doubt" />
          <span className="material-icons">
            
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>

        <div className="header__right">
          <span className="material-icons">
            
            <i className="fa-solid fa-bell"></i>
          </span>
          <span className="material-icons">
            
            <i className="fa-solid fa-circle-user"></i>
          </span>
        </div>
      </div>
      <div className="main__body">
        <div className="sidebar">
          <div className="sidebarOption sidebarOption__active">
            <span className="material-icons">
              
              <i className="fa-solid fa-box-tissue"></i>
            </span>
            <h3>All Doubts</h3>
          </div>

          <div className="sidebarOption">
            <span className="material-icons">
              <i className="fa-regular fa-star"></i>
            </span>
            <h3>Starred Doubts</h3>
          </div>

          <div className="sidebarOption">
            <span className="material-icons">
              
              <i className="fa-regular fa-hourglass-half"></i>
            </span>
            <h3>Snoozed Doubts</h3>
          </div>
        </div>
        <div className="ntfi-wrapper">
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
          <SingleNotifi />
        </div>
      </div>
    </>
  );
};

export default Notification;
