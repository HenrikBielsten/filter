import React, { Component } from 'react';
import articles from './articles.js';
import { NavLink } from 'react-router-dom';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import "./Article.css";

class Test extends Component{

  state={
    open: false
  }


  componentWillMount() {

  }


  render() {
    return (
      <div>
        <h3> {this.props.title} </h3>
        <h5> Chapter: {this.props.chapter} </h5>
        <p> {this.props.ingress} </p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}


export default Test;
