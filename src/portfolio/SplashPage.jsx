import { Component } from "react";
import video from '../assets/videos/video.mp4'
import "../CSS/splashPage.css";
import '../fonts/namasthe.ttf';
import {TiArrowDownOutline} from 'react-icons/ti';

class SplashPage extends Component {
  render() {
    return (
      <div className="splash-page" id='splash'>
        <video className="videoTag" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className='row'>
        <div className="introductionText col-lg-6 col-md-auto col-sm-auto">
          <p id="namasthe">Namasthe!</p>
          <p id="myName">I'm Nishanth & I'm a <span className='coder'>&lt;<code id='text'>coder</code>&#47;&gt;</span></p>
        </div>
        <div className='swipe-text'>
          <p>get to know more about me</p>
          <TiArrowDownOutline className='down-arrow'/>
        </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
