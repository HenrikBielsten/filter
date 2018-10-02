import React, { Component } from 'react';
import './App.css';
import './index.css';
import Home from "./components/Home/Home";
import Chapter1 from "./components/Chapter1/Chapter1";
import Chapter2 from "./components/Chapter2/Chapter2";
import Chapter3 from "./components/Chapter3/Chapter3";
import Chapter4 from "./components/Chapter4/Chapter4";
import Header from "./components/Header/Header.js";

import { Router, Link } from '@reach/router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Header />
          <Link to="/" style={{margin: '10px'}}>Home</Link>
          <Link to="chapter1" style={{margin: '10px'}}>Chapter1</Link>
          <Link to="chapter2" style={{margin: '10px'}}>Chapter2</Link>
          <Link to="chapter3" style={{margin: '10px'}}>Chapter3</Link>
          <Link to="chapter4" style={{margin: '10px'}}>Chapter4</Link>
        </nav>

        <Router>
          <Home path="/"/>
          <Chapter1 path="chapter1"/>
          <Chapter2 path="Chapter2"/>
          <Chapter3 path="Chapter3"/>
          <Chapter4 path="Chapter4"/>
        </Router>

      </div>
    );
  }
}

export default App;
