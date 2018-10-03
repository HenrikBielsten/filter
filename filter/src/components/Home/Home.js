import React, { Component } from "react";
import Header from "../Header/Header.js";
import articles from '../Database/articles.js';
import { Link } from '@reach/router';
import "./Home.css";
class Home extends Component {
  state = {
    articles: articles,
  }
  render() {

    return (
      <div>
        <Header src={window.location.origin + '/images/Filter_logo.svg'} mode='fit' height={'14vh'} width={'14vh'}  />
        <div className="headerLine"></div>
        <div className="homePage">
        {this.state.articles.map((article, key) => {
          return    <Link key={key} className={`wrapperHome Chapter${article.chapter.toString()}`} to={`Chapter${article.id}`} >
                      <p>{article.title}</p>
                      <p>{article.ingress}</p>
                  </Link>
        })}
        </div>
      </div>
    );
  }
}

export default Home;
