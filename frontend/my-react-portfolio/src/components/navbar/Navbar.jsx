import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX, HiOutlineDownload } from "react-icons/hi";
import Logo from "../../assets/logo2.svg";
import "./navbar.css";

// Notice that all classnames are implemented based on the BEM framework - Block Element Modifier

const Navbar = () => {
  // Making the navigation links more compact and reuseable
  const Menu = () => {
    return (
      <>
        <p onClick={() => setToggleMenu(false)}>
          {" "}
          <a href="#skills">Skills</a>{" "}
        </p>
        <p onClick={() => setToggleMenu(false)}>
          {" "}
          <a href="#projects">Projects</a>{" "}
        </p>
        <p onClick={() => setToggleMenu(false)}>
          {" "}
          <a href="#blog">Blog</a>{" "}
        </p>
        <p onClick={() => setToggleMenu(false)}>
          {" "}
          <a href="#contact">Contact</a>{" "}
        </p>
      </>
    );
  };
  // To set the state of the menu icon so it can be toggled
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // Desktop Menu Style
    <div className="dami__navbar">
      <div className="dami__navbar-links">
        <div className="dami__navbar-links_logo">
          <a href="#top">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="dami__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dami__navbar-cta">
        <button type="button">Hire Me</button>
      </div>
      {/* Mobile Menu Style */}
      <div className="dami__navbar-mobilemenu">
        {toggleMenu ? (
          <HiOutlineX size={37} onClick={() => setToggleMenu(false)} />
        ) : (
          <HiOutlineMenu size={37} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="dami__navbar-mobilemenu_container scale-up-center">
            <div className="dami__navbar-mobilemenu_container-links">
              <Menu />
              <div className="dami__navbar-mobilemenu_container-links-cta">
                <button type="button">Hire Me</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
