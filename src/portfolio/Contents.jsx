import React, { Component } from "react";
import "../CSS/contents.css";
import { contents } from "../portfolio/animate.js";

class Contents extends Component {
  componentDidMount() {
    contents();
  }

  render() {
    return (
      <div className="container contents" id="contents">
        <div className="options">
          <p
            className="about_me"
            onClick={() => this.clickHandler("about.me")}
          ></p>
          <p
            className="my_experiences"
            onClick={() => this.clickHandler("my.experiences")}
          ></p>
          <p
            className="my_abilities"
            onClick={() => this.clickHandler("my.abilities")}
          ></p>
          <p
            className="my_projects"
            onClick={() => this.clickHandler("my.projects")}
          ></p>
          <p
            className="contact_me"
            onClick={() => this.clickHandler("contact.me")}
          ></p>
        </div>
      </div>
    );
  }

  clickHandler = (page) => {
    this.props.history.push(`/${page}`);
  };
}

export default Contents;
