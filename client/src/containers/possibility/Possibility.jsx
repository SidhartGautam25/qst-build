import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";
const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        Were we able to help you? Write us a review:
      </h1>
      <p>
        Your review means everything to us.Let us know if we lacked something!
      </p>
      <div className="gpt3__ask-content__input">
        <div className="gpt3__ask-content__input_internal">
          <input
            className="gpt3__ask-content__input_text"
            type="text"
            placeholder="Start writing..."
          />
        </div>
        <div className="gpt3__ask-content__input_internal-btn">
          <button className="submit-button-review" type="button">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

export default Possibility;
