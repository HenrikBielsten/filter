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
        <Image src={article.image1} mode='fill' height={64} width={96} />
        <Image src={article.image2} mode='fill' height={64} width={96} />
        <Image src={article.image1} mode='fill' height={64} width={96} />
        <Image src={article.image2} mode='fill' height={64} width={96} />
        <Image src={article.image1} mode='fill' height={64} width={96} />
      </div>

    );
  }
}

export default ExtraGallery;
