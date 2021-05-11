import React, { Component } from "react";
import "../CSS/profile.css";
import { RiCodeSFill, RiCodeSSlashFill } from "react-icons/ri";
import profile from "../assets/profile.png";

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid profile" id='profile'>
        <div className="profile-heading">
          <h2>Profile</h2>
          <p>
            I'm a &nbsp;
            <RiCodeSFill className="code-icon" />
            <code>Full Stack Developer</code>
            <RiCodeSSlashFill className="code-icon" />
          </p>
        </div>
        <hr />
        <div className="row details">
          <div className="col-lg-6 text-center profile-image">
            <img src={profile} alt="profile"></img>
          </div>
          <div className="col-lg-6 equal">
            <div className="col-lg-10 about-me">
              <h3>About Me</h3>
              <p>
                "I am ambitious, adventurous, animated and rational human. I'm
                determined towards my goal. I'm a fast learner and knowledge
                seeker, in my pursuit to acheive things and improve my knowledge
                library. I am a Professional programmer who loves his job. I
                love structure and order and I also stand for quality and love
                spending time on fixing little details."
              </p>
            </div>
            <div className="col-lg-10 details">
              <h3>Details</h3>
              <p>
                <strong>Name: </strong>
                Nishanth Gunupudi <br />
                <strong>Age: </strong>
                27 years
                <br />
                <strong>Mobile: </strong>
                +91-8960419062
                <br />
                <strong>Location: </strong>
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
