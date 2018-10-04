import React, { Component } from 'react';
import './Text.css';
class Text extends Component {

  render() {

    return (
        <p className="textForChapters"> {this.props.text} </p>
    );
  }
}


export default Text;
