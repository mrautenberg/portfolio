import React from "react";

const ProjectCard = () => {
  return (
    <div className="project">
      <article className="project-text">
        <h2>Project One</h2>
        <p>Look at this nice project! </p>
      </article>

      <div className="project-picture">
        <p>IMAGE</p>
        <a className="btn" href="/">
          see live version
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
