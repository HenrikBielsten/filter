import React, { Component } from "react";
import Header from "../Header/Header.js";
import "./Home.css";
class Home extends Component {
  render() {

    return (
      <div className="homePage">
        <Header src={window.location.origin + '/images/Filter_logo.svg'} mode='fit' height={'14vh'} width={'14vh'}  />
        <div className="headerLine"></div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
