import React, { Component } from "react";
import "./index.css";

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
  let {mode, src, height, width, style, ...props} = this.props;
  let modes = {
    'fill': 'cover',
    'fit': 'contain'
  };
  let size = modes[mode] || 'contain';

  let defaults = {
    height: height || `${8}vh`,
    width: width || `${8}vw`,
  }

  let important = {
    backgroundImage: `url("${src}")`,
    backgroundSize: size,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div
      onClick={this.onClick}
      className={`wrapper ${this.props.menuhidden}`}>
      <div className="header">
        <div className="logo" {...props} style={{...defaults, ...style, ...important}} />
        <div className="titleAndNumber"> {this.props.title}{this.props.dot} {this.props.id} {this.props.extra} {this.props.lastid} </div>
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
