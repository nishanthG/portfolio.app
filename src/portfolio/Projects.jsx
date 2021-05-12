import { Component } from "react";
import "../CSS/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container projects" id="projects">
        <h2>Projects</h2>
        <hr />
        <div className="row justify-content-md-center">
          <div className="col-lg-12">
            <blockquote class="blockquote text-center">
              <p className="mb-0">
              “Things may come to those who wait, but only the things left by those who hustle.”
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Abraham Lincoln</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
