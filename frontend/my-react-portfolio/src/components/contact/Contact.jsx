import React from "react";
import { Email, LinkedIn, Twitter, Instagram } from "./index";
import { Github } from "../skills/index";
import CTA from "../cta/CTA";
import "./contact.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="dami__contact section__padding section__margin"
    >
      <div className="dami__contact-head">
        <h4>let's chat</h4>
        <p>
          together we can create <span>magic!</span>
        </p>
      </div>
      <div className="dami__contact-social">
        <a href="mailto:badadamilola@gmx.de" target="_blank">
          <img src={Email} alt="email" />
        </a>
        <a href="https://www.linkedin.com/in/damilolabada/" target="_blank">
          <img src={LinkedIn} alt="linkedin" />
        </a>
        <a href="https://github.com/damygoes" target="_blank">
          <img src={Github} alt="github" />
        </a>
        <a href="https://twitter.com/damygoes" target="_blank">
          <img src={Twitter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/damy.goes/" target="_blank">
          <img src={Instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
