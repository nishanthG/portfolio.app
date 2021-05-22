import React, { Component } from "react";
import "../CSS/splashPage.css";
import "../fonts/namasthe.ttf";
import { TiArrowRightOutline } from "react-icons/ti";
import {hello} from './animate.js';

class SplashPage extends Component {

  componentDidMount(){
    hello()
  }
  render() {
    return (
      <div className="splash-page" id="splash">
        <div className="container-bg row">
          <div className="introductionText col-lg-12 col-md-auto col-sm-auto">
            <p className='greet'></p>
            <p className='name'></p>
          </div>
          <div className="swipe-text">
            <p onClick={this.onClickHandler}>get to know more about me  <TiArrowRightOutline className="down-arrow"/></p>
          </div>
        </div>
      </div>
    );
  }

  onClickHandler = () => {
    this.props.history.push('/contents')
  }
}

export default SplashPage;
