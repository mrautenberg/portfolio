const Projects = () => {
  return (
    <main className="project-container">
      <h1>Projects.</h1>

      <article>
        <h2 className="project-title">Unscripted</h2>
        <p className="project-description">
          Second team project at KYH using Github flow, scrum & sprints. A movie
          app using built with React, Firebase auth, Firestore, Styled
          Components & ChartJS. Unscripted makes it possible to search for
          movies (TMDB), save them to your watchlists and get stats to really
          know whether or not you've seen too many movies lately and which
          genres you watched the most.
        </p>
        <small>
          <span className="bold">Keywords: </span> React, Firebase, Firestore,
          Styled Components, TMDB, ChartJS, Scrum, Figma
        </small>
        <div className="buttons">
          <a
            className="btn btn-primary floating"
            href="https://unscripted-app.surge.sh"
            rel="noopener noreferrer"
            target="_blank"
          >
            LIVE VERSION
          </a>
          <a
            className="btn btn-secondary floating"
            href="https://github.com/alexanderys/fe20tp2_bev_2"
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </article>

      <article>
        <h2 className="project-title">Pen</h2>
        <p className="project-description">
          First team project at KYH using Github flow, scrum & sprints. A
          note-app with markdown functionality using SimpleMDE and adding extra
          functionaliy. Note sorting, dark mode feature and saves notes in local
          storage.
        </p>
        <small>
          <span className="bold">Keywords: </span> JavaScript, Github Flow, Team
          Project, Local Storage, Editor, Markdown
        </small>
        <div className="buttons">
          <a
            className="btn btn-primary floating"
            href="https://penapp.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LIVE VERSION
          </a>
          <a
            className="btn btn-secondary floating"
            href="https://github.com/gunkarlsson/fe20tp1_pen"
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </article>
      <article>
        <h2 className="project-title">React Github Finder</h2>
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
            className="btn btn-primary floating"
            href="https://rautenberg-githubfinder.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LIVE VERSION
          </a>
          <a
            className="btn btn-secondary floating"
            href="https://github.com/mrautenberg/react-github-finder"
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
