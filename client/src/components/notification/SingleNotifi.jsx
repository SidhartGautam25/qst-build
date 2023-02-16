import React, { useState } from "react";
// import "../../pages/notifications/notifications.css";
import "./singlenotifi.css";

const SingleNotifi = () => {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
    console.log("true hai bhai");
  }

  // function handleclass() {
  //   return `card2 ${isHovering ? "" : "hover"}`;
  // }
  return (
    <>
      <a className="card2" onMouseEnter={handleMouseEnter()} href="#">
        <h3>This is option 2</h3>
        <p className="small">
          Card description with lots of great facts and interesting details.
        </p>

        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </>
  );
};

export default SingleNotifi;
