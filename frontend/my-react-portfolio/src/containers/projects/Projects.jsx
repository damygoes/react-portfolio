import React from "react";
import { ProjectCard } from "../../components";
import "./projects.css";

const Projects = () => {
  return (
    <div
      id="projects"
      className="dami__projects section__padding section__margin"
    >
      <div className="dami__projects-head">
        <h3>My recent projects</h3>
        <div></div>
      </div>
      <div className="dami__projects-body">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
