import React, { Component } from "react";
import './Joystick.css';

class Joystick extends Component {

  constructor(props){
        super(props);
        this.timer = null;
    }

  scrollUpF = () => {
    window.scrollBy(0, -1); // horizontal and vertical scroll increments
    this.timer = setTimeout(() => this.scrollUpF(),20); // scrolls every X milliseconds
    console.log('scrollUpF');
  }

  scrollUpS = () => {
    window.scrollBy(0, -1); // horizontal and vertical scroll increments
    this.timer = setTimeout(() => this.scrollUpS(),50); // scrolls every X milliseconds
    console.log('scrollUpS');
  }

  scrollDownS = () => {
    window.scrollBy(0, 1); // horizontal and vertical scroll increments
    this.timer = setTimeout(() => this.scrollDownS(),50); // scrolls every X milliseconds
    console.log('scrollDownS');
  }

  scrollDownF = () => {
    window.scrollBy(0, 1); // horizontal and vertical scroll increments
    this.timer = setTimeout(() => this.scrollDownF(),20); // scrolls every X milliseconds
    console.log('scrollUpF');
  }


  stopScroll = () => {
      clearTimeout(this.timer);
      console.log('stopped');
  }

render() {
  return (
    <div>

      <div
        className="scrollContainer">

        <div className="scrollUpFast"
          onPointerOver={this.scrollUpF}
          onMouseLeave={this.stopScroll}>

        </div>

        <div
          className="scrollUpSlow"
          onPointerOver={this.scrollUpS}
          onMouseLeave={this.stopScroll}>

        </div>

        <div className="scrollDownSlow"
          onPointerOver={this.scrollDownS}
          onMouseLeave={this.stopScroll}>

        </div>

        <div className="scrollDownFast"
          onPointerOver={this.scrollDownF}
          onMouseLeave={this.stopScroll}>

        </div>

      </div>

    </div>
  )
}
}

export default Joystick;
