import React, { Component } from "react";
import Header from "./Header";
import "../CSS/bootstrap.css";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import SplashPage from "./SplashPage";
import Profile from "./Profile";
import Experiences from "./Experiences";
import Abilities from "./Abilities";
import Projects from "./Projects";
import Contact from "./Contact";

class PortfolioApp extends Component {
  render() {
    return (
      <div className="root-body">
        <Header />
        <NavigationBar />
        <SplashPage />
        <Profile />
        <Experiences />
        <Abilities />
        <Projects/>
        <Contact/>
        <Footer />
      </div>
    );
  }
}

export default PortfolioApp;
