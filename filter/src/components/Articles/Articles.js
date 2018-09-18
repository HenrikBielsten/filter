import React, { Component } from 'react';
import Article from '../Article/Article.js';
import articles from '../Article/articles';
import { Link } from 'react-router-dom';
class Articles extends Component {
  state = {
    articles: articles,
  }

  handleClick = (e) => {
    this.setState({
      key: e.target.value,
    })
  }
  render() {
    return (
      <div>

        {this.state.articles && this.state.articles.map((article, key) => {
          return   <Link key={key} to={'/articles/' + article.id}>
                    <Article item={article} key={key} onClick={this.handleClick}/>
                  </Link>
        })}

      </div>

    );
  }
}

export default Articles;
