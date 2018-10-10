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
        <Image src={article.image1} imgtext={article.imageText1} mode='fill' height={80} width={120} />
        <Image src={article.image2} imgtext={article.imageText2} mode='fill' height={80} width={120} />
        <Image src={article.image3} imgtext={article.imageText3} mode='fill' height={80} width={120} />
        <Image src={article.image4} imgtext={article.imageText4} mode='fill' height={80} width={120} />
        <Image src={article.image5} imgtext={article.imageText5} mode='fill' height={80} width={120} />
      </div>

    );
  }
}

export default ExtraGallery;
