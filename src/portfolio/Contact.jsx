import { Component } from "react";
import "../CSS/contact.css";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { GoLocation, GoMail, GoMarkGithub } from "react-icons/go";
import {IoLogoBitbucket} from "react-icons/io";
import emailjs from 'emailjs-com';

class Contact extends Component {
  render() {
    return (
      <div className="container contact" id="contact">
        <h2>Connect with me</h2>
        <hr />
        <div className="row">
          <div className="col-lg-6 details">
            <h3>Details</h3>
            <div className="col-lg-12 pad">
              <p>
                <strong>
                  <AiOutlineWhatsApp />
                </strong>
                <a href="tel:+918960419062">+91-8960419062</a>
              </p>
              <p>
                <strong>
                  <GoMail />
                </strong>
                <a href="mailto:nishanth.gunupudi@gmail.com">
                  nishanth.gunupudi@gmail.com
                </a>
              </p>
              <p>
                <strong>
                  <GoMarkGithub />
                </strong>
                <a href="https://github.com/nishanthG">
                  github/nishanthG
                </a>
              </p>
              <p>
                <strong>
                  <IoLogoBitbucket />
                </strong>
                <a href="https://bitbucket.org/nishanthg/">
                bitbucket/nishanthg
                </a>
              </p>
              <p>
                <strong>
                  <AiFillLinkedin />
                </strong>
                <a href="https://www.linkedin.com/in/gnishanth/">
                  linkedin/gnishanth
                </a>
              </p>
              <p>
                <strong>
                  <GoLocation />
                </strong>
                India
              </p>
            </div>
          </div>
          <div className="col-lg-6 contact-me">
            <div className="col-lg-12">
              <h3>Send me an email</h3>
            </div>
            <div className="col-lg-12">
              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group row">
                  <label className="col-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      placeholder="what do I call you?"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      name="from_email"
                      placeholder="where do I send Hi?"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-2 col-form-label">Your message</label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      name="from_message"
                      rows="3"
                      placeholder="tell me a secret :)"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary md-2 float-right">send Hi! 👋 </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_o8860kh', 'template_813vqja', e.target, 'user_vAC5TbfdBKGcTjpLMHfaD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

export default Contact;
