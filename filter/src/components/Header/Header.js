import React, { Component } from "react";
import './index.css';
class Header extends Component {
  constructor(props) {
   super(props);
   this.state = {
     navbar: false
   };
   this.eventHandler = this.eventHandler.bind(this);
 }
 eventHandler(event) {
   this.setState(prevState => ({
     navbar: !prevState.navbar
   }));
 }

render() {
  return (
    <div className="wrapper">
      <div className="header">
        <img className="logo" src={window.location.origin + '/images/Filter_logo.svg'}  alt="logo"/>
        <div
        className="hamburger" >
          <div
            className={this.state.navbar ? "bars Active" : "bars "}
            onClick={this.eventHandler} >
          </div>
         </div>
      </div>

    </div>
  )
}
}
export default Header;
