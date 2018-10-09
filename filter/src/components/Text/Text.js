import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import articles from '../Database/articles.js';
import './Text.css';
class Text extends Component {
  state = {
    articles: articles,
  }
  render() {
    const article= this.state.articles[0];
    return (
      <div className="divWrapper">
        <p className="textForChapters"> {this.props.text} </p>
        {this.props.comment === 'yes' ? <Comment title={article.title} comment={article.comment} comments={article.comments} />: <div></div>}
      </div>
    );
  }
}


export default Text;
