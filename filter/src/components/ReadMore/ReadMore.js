import React, { Component } from 'react';
import './ReadMore.css';
import Image from '../Image/Image';
import articles from '../Database/articles.js';

class ReadMore extends Component {
  constructor(props) {
  super(props);
  this.state = {
    readmore: false,
    articles: articles,
  };
  this.eventHandler = this.eventHandler.bind(this);
}

eventHandler(event) {
  event.stopPropagation();
  this.setState(prevState => ({
    readmore: !prevState.readmore
  }));

}
  render() {

    const article = this.state.articles[0];

    return (
      <div className="readMoreWrapper">

        <div
          onClick={this.eventHandler}
          className={this.state.readmore ? "open" : "closed"}
          >
        </div>
        {/* <div className={this.state.readmore ? "underlayOpen" : "underlayClosed"}></div> */}

        <div className={this.state.readmore ? "borderTopOpen " : "borderTopClosed "}></div>
        <div className={this.state.readmore ? "readMore" : "readMoreClosed"}>
          <h1 className="readMoreHeader">{this.props.title}</h1>
          <div className="imageWrapper">
            <Image src={article.image1} mode='fill' height={64} width={96} />
            <Image src={article.image2} mode='fill' height={64} width={96} />
            <Image src={article.image1} mode='fill' height={64} width={96} />
            <Image src={article.image2} mode='fill' height={64} width={96} />
            <Image src={article.image1} mode='fill' height={64} width={96} />
          </div>
        </div>
        <div className={this.state.readmore ? "borderBottomOpen " : "borderBottomClosed "}></div>


      </div>
    );
  }
}

export default ReadMore;
