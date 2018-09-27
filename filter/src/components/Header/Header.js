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
 onClick = (e) => {
 e.stopPropagation();
 }

render() {
  return (
<<<<<<< HEAD
    <div className={`wrapper ${this.props.hidden}`}>
=======
    <div
      onClick={this.onClick}
      className={`wrapper ${this.props.menuHidden}`}>
>>>>>>> d20aaf465bd1d0c7b9ad4926813ade7eeec36685
      <div className="header">
        <img className="logo" src={window.location.origin + '/images/Filter_logo.svg'}  alt="logo"/>
        <div
        className="hamburger" >
          <div
            className={this.state.navbar ? "bars Active" : "bars "}
            onClick={this.eventHandler} >
          </div>
          <div
            className={this.state.navbar ? "bars Active" : "bars2 "}
            onClick={this.eventHandler} >
          </div>
          <div
            className={this.state.navbar ? "bars Active" : "bars3 "}
            onClick={this.eventHandler} >
          </div>
         </div>
      </div>

    </div>
  )
}
}
export default Header;
