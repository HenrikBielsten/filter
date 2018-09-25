import React, { Component } from "react";
import './index.css';
import ProgressBar from '../ProgressBar/ProgressBar.js';
class Header extends Component {

render() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo"></div>
      </div>
      <ProgressBar />
      <div className="hamburger">
        <div></div>
       </div>

    </div>
  )
}
}
export default Header;
