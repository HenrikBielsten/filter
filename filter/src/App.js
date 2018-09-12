import React, { Component } from 'react';
// import ArticleWrapper from './components/ArticleWrapper/ArticlesWrapper.js';
import Router from './components/Routes/MainRoutes'
// import articles from './components/Article/articles';
import './index.css';
// <ArticleWrapper articles={articles}/>

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Chapters</h2>
        <Router />
      </div>
    );
  }
}

export default App;
