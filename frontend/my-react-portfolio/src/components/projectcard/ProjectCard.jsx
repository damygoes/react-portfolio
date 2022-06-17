import React from "react";
import ComingSoon from "../../assets/coming-soon.svg";
import "./projectcard.css";

const projects = [
  {
    id: "001",
    title: "Activate",
    description: "Activity app built using React, REST API, and Bootstrap",
    image:
      "https://images.unsplash.com/photo-1594694899408-32443deff59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    isDone: true,
    deployed: "https://www.google.com",
    github: "https://github.com/damygoes",
  },
  {
    id: "002",
    title: "Activate",
    description: "Activity app built using React, REST API, and Bootstrap",
    image:
      "https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",

    isDone: true,
    deployed: "https://www.google.com",
    github: "https://github.com/damygoes",
  },
  {
    id: "003",
    title: "Activate",
    description: "Activity app built using React, REST API, and Bootstrap",
    image:
      "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2plY3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isDone: true,
    deployed: "https://www.google.com",
    github: "https://github.com/damygoes",
  },
  {
    id: "004",
    title: "Activate",
    description: "Activity app built using React, REST API, and Bootstrap",
    image:
      "https://images.unsplash.com/photo-1587480335344-95513e5cf3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    isDone: false,
    deployed: "https://www.google.com",
    github: "https://github.com/damygoes",
  },
];

/* NOTE:
() => {} explicit returning, we must use the return keyword to return something
() =>  () implicit return, everything inside the braces will be returned
*/

const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => {
        return project.isDone ? (
          <div className="dami__projectcard" key={project.id}>
            <div className="dami__projectcard-image">
              <img src={project.image} />
            </div>
            <div className="dami__projectcard-content_bottom">
              <h4> {project.title} </h4>
              <p> {project.description} </p>
              <div className="dami__projectcard-content_links">
                <a href="#">Case Study</a>
                <div>
                  <a href={project.deployed}>Live Demo</a>
                  <a href={project.github}>Code</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="comingSoon" key={project.id}>
            <div className="dami__projectcard-image">
              <img src={project.image} />
            </div>
            <div className="dami__projectcard-content_bottom">
              <h4> {project.title} </h4>
              <p> {project.description} </p>
              <div className="dami__projectcard-content_links">
                <a href="#">About</a>
                <div>
                  <a href={project.deployed}>Demo</a>
                  <a href={project.github}>Code</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProjectCard;
