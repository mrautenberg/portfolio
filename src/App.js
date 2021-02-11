import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://api.github.com/users/mrautenberg");

      setUser(res.data);
    };

    getUser(user);
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
