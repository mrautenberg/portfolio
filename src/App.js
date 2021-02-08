import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

// Components
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
