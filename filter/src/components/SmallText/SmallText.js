import React, { Component } from 'react';
import './SmallText.css';
class SmallText extends Component {

  render() {
        return (  <div className="textWrapper"

                dangerouslySetInnerHTML={{__html: this.props.text}}
              />);

  }
}


export default SmallText;
