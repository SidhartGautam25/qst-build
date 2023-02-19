import React from "react";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import Card from "../../components/profile/Card";
import Stack from "../../components/profile/Stack";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />
      <div className="cover_rectangle"></div>
      <div className="cover_pfp"></div>
      <div className="cover_bluetick">
        <i class="fa-solid fa-check"></i>
      </div>
      <div className="profile_title">
        <h1>Lorem Ipsum </h1>
        <p className="profile_tag">@username</p>
        <div className="profile_cta">
          <button className="profile_cta-btn">ASK DOUBT</button>
        </div>
        <p className="profile_tag3">
          <bold>200+</bold> Doubts Solved
        </p>
      </div>
      <div className="profile_desc">
        <p className="profile_tag2">MERN Stack Developer | UI/UX Designer</p>
        <div className="profile_stack-wrapper">
          <Stack />
          <Stack />
          <Stack />
          <Stack />
        </div>
      </div>
      <div className="session">
        <h1 className="session-title">Recent Sessions</h1>
        <div className="line"></div>
        <div className="recent-session">
        <Card />
        <Card />
        <Card />
        <Card />


        </div>
      </div>
    </>
  );
};

export default Profile;
