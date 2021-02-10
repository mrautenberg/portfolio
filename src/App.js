import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
