import React from "react";
import {
  Bootstrap,
  Expressjs,
  Github,
  Mongodb,
  Nodejs,
  Reactjs,
  VSCode,
} from "./index";
import "./skills.css";

const Skills = () => {
  return (
    <div id="skills" className="dami__skills section__padding section__margin">
      <div className="dami__skills-title">
        <h3>Skills</h3>
        <p>I use these tools to bring my ideas to reality. </p>
      </div>
      <div className="dami__skills-content">
        <div className="dami_skills-content_card">
          <h4>Frontend</h4>
          <div className="dami_skills-content_card-group">
            <div>
              <img src={Reactjs} alt="react-js" />
              <p>React</p>
            </div>
            <div>
              <img src={Bootstrap} alt="bootstrap" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="dami_skills-content_card">
          <h4>Backend</h4>
          <div className="dami_skills-content_card-group">
            <div>
              <img src={Nodejs} alt="node-js" />
              <p>Node JS</p>
            </div>
            <div>
              <img src={Expressjs} alt="express-js" />
              <p>Express JS</p>
            </div>
            <div>
              <img src={Mongodb} alt="mongo-db" />
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
        <div className="dami_skills-content_card">
          <h4>IDE & Version Control</h4>
          <div className="dami_skills-content_card-group">
            <div>
              <img src={Github} alt="github" />
              <p>Github</p>
            </div>
            <div>
              <img src={VSCode} alt="visual-studio-code" />
              <p>Visual Studio Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
