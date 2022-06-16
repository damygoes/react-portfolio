import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import Portrait from "../../assets/portrait.jpg";
import "./header.css";

const Header = ({ fullname, description, aboutme }) => {
  return (
    <div id="header" className="dami__header section__padding">
      <div className="dami__header-content">
        <h3 className="dami__header-content_fullname">
          <div></div>
          {fullname}
        </h3>
        <div className="dami__header-content_description">
          <h1>{description}</h1>
        </div>
        <p className="dami__header-content_description-aboutme">{aboutme}</p>
        <div className="dami__header-content__cta">
          <button type="button">Hire Me</button>
          <a href="#">
            <p>
              Resume <HiOutlineDownload />
            </p>
          </a>
        </div>
        <div className="dami__header-content__empty"></div>
        <p className="dami__header-content__footer">
          {" "}
          I am currently open for work.
        </p>
      </div>
      <div className="dami__header-image">
        <img src={Portrait} alt="Dami's Portrait" />
      </div>
    </div>
  );
};

export default Header;
