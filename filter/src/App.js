import React, { Component } from 'react';
import './App.css';
import './index.css';
import Home from "./components/Home/Home.js";
import Chapter1 from "./components/Chapter1/Chapter1";
import Chapter2 from "./components/Chapter2/Chapter2";
import Chapter3 from "./components/Chapter3/Chapter3";
import Chapter4 from "./components/Chapter4/Chapter4";

import { Router, Link } from '@reach/router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/"/>
          <Chapter1 path="Chapter1"/>
          <Chapter2 path="Chapter2"/>
          <Chapter3 path="Chapter3"/>
          <Chapter4 path="Chapter4"/>
        </Router>

      </div>
    );
  }
}

export default App;
