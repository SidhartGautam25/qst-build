import React from "react";
import "./card.css";
import Stack from "./Stack";
const Card = () => {
  return (
    <div className="card">
      <div className="card_img"></div>
      <div className="card_desc">
        <div className="card_time">10hrs ago</div>
        Unresolved Doubt 404
      {/* <Stack/> */}

      </div>
    </div>
  );
};

export default Card;
