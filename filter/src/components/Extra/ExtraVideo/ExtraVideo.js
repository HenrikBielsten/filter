import React, { Component } from 'react';
import VideoImage from './VideoImage/VideoImage.js';
import articles from '../../Database/articles.js';

import '../Extra.css';
import './ExtraVideo.css';

class ExtraVideo extends Component {

  state = {
    articles: articles,
  }


  render() {

    const article = this.state.articles[0];

    return (

      <div className="videoContent">
        <VideoImage src={article.video} mode='fill' width={326} height={180} margin="0px" />
        <div className="playButton"></div>
      </div>

    );
  }
}

export default ExtraVideo;
