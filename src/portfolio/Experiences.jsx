import React, { Component } from "react";
import "../CSS/experiences.css";
import Oracle from "../assets/logos/Oracle-big.png";
import iitklogo from "../assets/logos/iitklogo.png";

class Experiences extends Component {
  render() {
    return (
      <div className="container-fluid experiences" id="experiences">
        <h2>Experiences</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 career">
            <h3>Careers</h3>
          </div>
        </div>
        <div className="row justify-content-lg-center'">
          <div className="col-lg-6">
            <img src={Oracle} alt="" id="oracle-logo" />
          </div>
          <div className="col-lg-6 designation">
            <p>Software Engineer, OAL IDC - (Current)</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <p>
              "As a Software Engineer at Oracle IDC, I work on projects like
              AHE(Accelerated Hiring Experience), ORC CS(Oracle Cloud - Career
              Sites) and we’re Leading the Cloud Revolution. Using frameworks
              and technologies such as Oracle JavaScript Extension Toolkit
              (JET), HTML, JS, JAVA and MySQL, we build solutions and solve
              hurdles. I was also introduced working with Git Flow for efficient
              version control and evolved alongside my colleagues to write nice
              readable and reusable code."
            </p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-12">
            <blockquote class="blockquote text-center">
              <p className="mb-0">
                My experiences have taught me a lot and I'm happy with my
                learnings, if not with what I went through to learn.
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Ally Sheedy</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 career">
            <h3>Education</h3>
          </div>
        </div>
        <div className="row justify-content-lg-center'">
          <div className="col-lg-6">
            <img src={iitklogo} alt="" id="iitk-logo" />
          </div>
          <div className="col-lg-6 degree">
            <p>B.Tech in Computer Science & Engineering</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <p>
              "This will always be the phase of my life I don't mind re-living.
              The experiences this place gives you, made me who I'm today.
              Interacting with one of the best minds in the country and being
              friends with few who still hold a special place in my heart, can't
              be replaced. The amount of pressure one goes through not only
              makes one a better person but also polishes one for the world
              awaiting. As they always say 'This place gives you freedom, also
              teaches you how not to misuse it'. The discipline that this place
              thought me will always be with me. I'm not only proud that I'm an
              alumini of this great institute but I'll always be in debt to it."
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
