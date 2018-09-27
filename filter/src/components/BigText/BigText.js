import React, { Component } from 'react';
import './BigText.css';

class BigText extends Component {

  render() {

    return (

        <p className="BigText"> {this.props.bigText} </p>

    );
  }
}


export default BigText;
