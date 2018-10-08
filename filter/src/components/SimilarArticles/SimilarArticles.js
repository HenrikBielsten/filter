import React, { Component } from 'react';
import './SimilarArticles.css';
class SimilarArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: [
          {title: 'Per-Oves sista resa', image: 'https://i0.wp.com/magasinetfilter.se/wp-content/uploads/2018/05/papua_01.jpg?fit=1463%2C975&ssl=1'},
          {title: 'Upptäcksresan', image: 'https://i0.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/theraft_14.jpg?fit=1500%2C840&ssl=1'},
          {title: 'Vår bästa ovän', image: 'https://i0.wp.com/magasinetfilter.se/wp-content/uploads/2018/05/racc8atta1.jpg?fit=1500%2C840&ssl=1'}
        ]
  };
}
  render() {
    return (
      <div className="similarArticlesMaterialComponent">
        <p className="similarArticlesMaterialTitle">Liknande Artiklar</p>
        <div className="similarArticlesMaterialWrapper">
        {this.state.articles.map((article, key) => {
          return (
          <div className="similarArticlesBox" key={key}>
            <img className="similarArticlesImage" src={article.image} alt="articleimage"/>
            <div>
              <p className="similarArticlesMaterialText">{article.title}</p>
            </div>
          </div>
        );}

        )}
        </div>
      </div>
    );
  }
}


export default SimilarArticles;
