import { Component } from "react";
import "../CSS/footer.css";
import { FaHeart } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid app-footer">
          <div className="float-md-left float-lg-left heart-ul">
            <ul>
              <li>made with </li>
              <li>
                <FaHeart className="fa-heart react-icon" />
              </li>
            </ul>
          </div>
          <div className="float-md-right float-lg-right">
            <ul>
              <li>
                <AiOutlineCopyright className="fa-copyright react-icon" />
              </li>
              <li className="dev-name">nishanth.gunupudi</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Footer;
