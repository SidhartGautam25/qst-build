import React from "react";
import DoubtCard from "../../components/doubtpage/DoubtCard";
import Navbarvc from "../../components/navbar-other/Navbarvc";
import "./doubtpage.css";
const DoubtPage = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <Navbarvc />

      <div className="wrapper">
        <div className="title-section">
          <h1> Doubts</h1>
        </div>

        <div className="input-section">
          <input placeholder="Search for something" className="input-spec" />
          {/* <i class="fa-sharp fa-solid fa-magnifying-glass icon"></i> */}
        </div>
      </div>
      <div className="line2"></div>
      <div className="card-wrapper">
        <DoubtCard />
        {/* <DoubtCard />
        <DoubtCard />
        <DoubtCard /> */}

      </div>
    </div>
  );
};

export default DoubtPage;
