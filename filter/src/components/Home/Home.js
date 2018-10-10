import React, { Component } from 'react';
import Header from '../Menus/Header/Header.js';
import articles from '../Database/articles.js';
import { Link } from '@reach/router';
import './Home.css';
class Home extends Component {
  state = {
    articles: articles,
  }

  componentDidMount(){
    window.scrollTo(0, -10);
  }
  render() {
    return (
      <div>
        <div className="homePage">
        <Header src={window.location.origin + '/images/Filter_logo.svg'} mode='fit' height={'14vh'} width={'14vh'}   />
        <div className="headerLine"></div>
        {this.state.articles.map((article, key) => {
          return    <Link key={key} className={`wrapperHome Chapter${article.chapter.toString()}`} to={`Chapter${article.id}`} >
                      <img  className="snapShot" src={window.location.origin + '/images/' + article.snapshot}  alt="snapshot"/>
                    </Link>
        })}
        </div>
      </div>
    );
  }
}

export default Home;
