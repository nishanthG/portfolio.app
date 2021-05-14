import { Component } from "react";
import "../CSS/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container projects" id="projects">
        <h2>Projects</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 my-work">
            <h3>Hustling on</h3>
          </div>
        </div>
        <div className="row justify-content-lg-center'">
          <div className="col-lg-6">
            {/* <img src={Oracle} alt="" id="oracle-logo" /> */}
          </div>
          <div className="col-lg-6 title">
            <p>Project Title</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus omnis voluptatem expedita totam distinctio, odit qui quam, labore debitis numquam vero. Sequi fugiat omnis ea dolores, eum reiciendis corporis!
            </p>
          </div>
        </div>
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
        <div className="row">
          <div className="col-lg-4 my-work">
            <h3>My work</h3>
          </div>
        </div>
        <div className="row justify-content-lg-center'">
          <div className="col-lg-6">
            {/* <img src={Oracle} alt="" id="oracle-logo" /> */}
          </div>
          <div className="col-lg-6 title">
            <p>Project Title</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus omnis voluptatem expedita totam distinctio, odit qui quam, labore debitis numquam vero. Sequi fugiat omnis ea dolores, eum reiciendis corporis!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my-work">
            <h3>Blogs</h3>
          </div>
        </div>
        <div className="row justify-content-lg-center'">
          <div className="col-lg-6 title">
            <p>Blog Title</p>
          </div>
          <div className="col-lg-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus omnis voluptatem expedita totam distinctio, odit qui quam, labore debitis numquam vero. Sequi fugiat omnis ea dolores, eum reiciendis corporis!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
