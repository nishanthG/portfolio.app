import { Component } from "react";
import "../CSS/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="container contact" id="contact">
        <h2>Contact Me</h2>
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

export default Contact;
