import React, { Component } from 'react';
import Article from '../Article/Article.js';

class ArticleWrapper extends Component {
  state = {
    key: '',
  }

  handleClick = (e) => {
    this.setState({
      key: e.target.value,
    })
  }
  render() {
    return (
      <div>
        {this.props.articles && this.props.articles.map((article, key) => {
          return <Article item={article} key={key} onClick={this.handleClick}/>
        })}
      </div>
    );
  }
}

export default ArticleWrapper;
