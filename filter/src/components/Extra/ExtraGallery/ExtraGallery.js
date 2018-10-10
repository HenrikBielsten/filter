import React, { Component } from 'react';
import Image from '../../Image/Image';
import articles from '../../Database/articles.js';

import '../Extra.css';
import './ExtraGallery.css';

class ExtraGallery extends Component {

  state = {
    articles: articles,
  }

  render() {

    const article = this.state.articles[0];

    return (

      <div className="imageWrapper">
        <Image src={article.image1} imgText={article.imageText1} mode='fill' height={80} width={120} />
        <Image src={article.image2} imgText={article.imageText2} mode='fill' height={80} width={120} />
        <Image src={article.image3} imgText={article.imageText3} mode='fill' height={80} width={120} />
        <Image src={article.image4} imgText={article.imageText4} mode='fill' height={80} width={120} />
        <Image src={article.image5} imgText={article.imageText5} mode='fill' height={80} width={120} />
      </div>

    );
  }
}

export default ExtraGallery;
