import React, { Component } from 'react';
import articles from '../Article/articles';
import { Link } from 'react-router-dom';
class Articles extends Component {
  state = {
    articles: articles,
  }
  componentDidMount() {
    let { articles } = this.props.match.params;
  }

  render() {
    return (
      <div>
        <h2>Chapters</h2>
        {this.state.articles && this.state.articles.map((article, key) => {
          return   <Link key={key} to={'/articles/' + article.id}>
          <p>{article.title}</p>
          <p>{article.ingress}</p>
                  </Link>
        })}

      </div>

    );
  }
}

export default Articles;
