import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <Link to="/login">
        <button type="button">Get Started</button>
      </Link>
    </div>
  </div>
);

export default CTA;
