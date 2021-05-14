import { Component } from "react";
import "../CSS/navigationbar.css";
import {FaChevronLeft} from 'react-icons/fa'

class NavigationBar extends Component {

  componentDidMount(){
    document.getElementById("nav-bar").style.cssText = 'visibility: hidden;'
  }

  render() {
    return (
      <div className='navigation'>
        <div className="nav-btn" id="rotate">
          <button id="rotate" onClick={this.showNav}><FaChevronLeft id='menu'/></button>
        </div>
        <div className="nav-bar" id='nav-bar'>
          <ul className="float-right">
            <li onClick={() => this.handleClick("splash")}>Splash</li>
            <li onClick={() => this.handleClick("profile")}>Profile</li>
            <li onClick={() => this.handleClick("experiences")}>Experiences</li>
            <li onClick={() => this.handleClick("abilities")}>Abilities</li>
            <li onClick={() => this.handleClick("projects")}>My work</li>
            <li onClick={() => this.handleClick("contact")}>Connect</li>
          </ul>
        </div>
      </div>
    );
  }

  handleClick = (toElement) => {
    var elmnt = document.getElementById(toElement);
    elmnt.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  showNav = () => {
    // this.rotateMenu()
    var x = document.getElementById("nav-bar");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      document.getElementById('menu').style.cssText = "-webkit-transform:rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); -o-transform: rotate(90deg);";
    } 
    else {
      x.style.visibility = "hidden";
      document.getElementById('menu').style.cssText = "-webkit-transform:rotate(270deg); -moz-transform: rotate(270deg); -ms-transform: rotate(270deg); -o-transform: rotate(270deg);";
    }
  }
}

export default NavigationBar;
