import React, { Component } from 'react';
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
    <div className="nightModeWrapper">
      <div className={this.state.navbar ? "nightModeIcon Active" : "nightModeIcon "}
      onClick={this.eventHandler} ></div>
      <p className="nightModeText">
        Nattläge
      </p>
    </div>
  )
}
}
export default NightMode;
