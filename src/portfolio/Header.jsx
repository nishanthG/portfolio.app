import React, { Component } from "react";
import logo from '../assets/logo.png';
import mobilelogo from '../assets/mobile.png'
import '../CSS/header.css';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid app-header">
        <header>
            <img src={logo} className='float-left desktop-logo' alt="logo" />
            <img src={mobilelogo} className='rounded float-left mobile-logo' alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
