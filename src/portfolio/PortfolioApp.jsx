import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../CSS/bootstrap.css";
import SplashPage from "./SplashPage";
import Profile from "./Profile";
import Experiences from "./Experiences";
import Abilities from "./Abilities";
import Projects from "./Projects";
import Contact from "./Contact";
import Contents from "./Contents";

class PortfolioApp extends Component {
  render() {
    return (
      <div className="root-body">
        <Router>
          <Switch>
            <Route path="/" exact component={SplashPage} />
            <Route path="/contents" exact component={Contents} />
            <Route path="/about.me" exact component={Profile} />
            <Route path="/my.experiences" exact component={Experiences} />
            <Route path="/my.abilities" exact component={Abilities} />
            <Route path="/my.projects" exact component={Projects} />
            <Route path="/contact.me" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default PortfolioApp;
