import React, { Component } from 'react';
import logo from './logo.svg';
import Article from './components/Articles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DIS IS HTE BEST APP EVER</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Article />
      </div>
    );
  }
}

export default App;
