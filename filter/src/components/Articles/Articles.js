import React, { Component } from 'react';
import articles from '../Article/articles';
import ArticleWrapper from '../ArticleWrapper/ArticlesWrapper.js';

class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleWrapper articles={articles}/>
      </div>
    );
  }
}

export default Articles;
