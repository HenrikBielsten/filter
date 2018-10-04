import React, { Component } from 'react';
import './Ingress.css';
class Ingress extends Component {

  render() {

    return (
        <p className="ingressText"> {this.props.ingress} </p>
    );
  }
}


export default Ingress;
