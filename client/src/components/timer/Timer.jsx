import React, { useState, useEffect } from "react";
import "./timer.css";
import bro from '../../assets/bro.png'

const Timer = () => {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 59) {
        setMinutes(minutes - 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <div className=".cover_rectangle-main">
        <div className="cover_rectangle3">
          <h1 className="timer-heading">Wait for a moment</h1>
          <h1 className="timer-timing">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <div className="timer-btn">
            <button className="btn timer-butt">Retry</button>
            <button className="btn timer-butt">Cancel</button>
          </div>
        </div>
        <div>
            <img className="bro-img" src={bro} alt=""/>
        </div>
      </div>
    </>
  );
};

export default Timer;
