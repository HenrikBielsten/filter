import React, { Component } from "react";
import './NightMode.css';

class NightMode extends Component {
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
    <div className="NightModeWrapper">
      <div className={this.state.navbar ? "NightModeIcon Active" : "NightModeIcon "}
      onClick={this.eventHandler} ></div>
      <p className="NightModeText">
        Nattläge
      </p>
    </div>
  )
}
}
export default NightMode;
