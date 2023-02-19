import React, { useState } from "react";

import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is QStack?</a>
      </p>
      <p>
        <a href="#possibility">Ask a Question</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // <div className="main-wrapper">
    <div className={color ? "gpt3__navbar gpt3__navbar-bg" : "gpt3__navbar"}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
            <p>QStack</p>
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Link to="/signup">
          <p>Sign in</p>
        </Link>
        <Link to="/login">
          <button type="button"> Sign up</button>
        </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button"> Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
