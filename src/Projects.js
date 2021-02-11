const Projects = () => {
  return (
    <main className="project-container">
      <h1>Projects.</h1>
      <article>
        <h2 className="project-title">React Github Finder.</h2>
        <p className="project-description">
          Project from Brad Traversy's React front to back course on Udemy.
          Fetches data from Github API using Axios. Written with class-based
          components and refactored to functional components with hooks.
        </p>
        <small>
          <span className="bold">Keywords: </span> React, useEffect, useState,
          useReducer, useContext, External API
        </small>
        <div className="buttons">
          <a
            className="btn btn-primary"
            href="https://rautenberg-githubfinder.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LIVE VERSION
          </a>
          <a
            className="btn btn-secondary"
            href="https://github.com/mrautenberg/react-github-finder"
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </article>
      <article>
        <h2 className="project-title">Note app: Pen.</h2>
        <p className="project-description">
          First major team project at KYH using Github flow, scrum & sprints. A
          note-app with markdown functionality using simpleMDE and adding extra
          functionaliy. Note sorting, dark mode feature and saves notes in local
          storage.
        </p>
        <small>
          <span className="bold">Keywords: </span> JavaScript, Github Flow, Team
          Project, Local Storage, Editor, Markdown,
        </small>
        <div className="buttons">
          <a
            className="btn btn-primary"
            href="https://penapp.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LIVE VERSION
          </a>
          <a
            className="btn btn-secondary"
            href="https://github.com/gunkarlsson/fe20tp1_pen"
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </article>
      <article>
        <h2 className="project-title">Todo list: Listig.</h2>
        <p className="project-description">
          My very first JavaScript project. A very simple Todo list app that
          stores todos in local storage. I also added a contact form with
          validation to learn how to create one. WIP on refactoring, redesigned,
          and speach to text functionality.
        </p>
        <small>
          <span className="bold">Keywords: </span> JavaScript, Form Validation,
          Todo list, Local Storage, BEM CSS.
        </small>
        <div className="buttons">
          <a
            className="btn btn-primary"
            href="https://rautenberg-listig.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LIVE VERSION
          </a>
          <a
            className="btn btn-secondary"
            href="https://github.com/mrautenberg/todolist"
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </article>
    </main>
  );
};

export default Projects;
