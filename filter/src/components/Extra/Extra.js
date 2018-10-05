import React, { Component } from 'react';
import Image from '../Image/Image';
import articles from '../Database/articles.js';

import './Extra.css';
import './ExtraAudio.css';
import './ExtraVideo.css';

class Extra extends Component {
  constructor(props) {
  super(props);
  this.state = {
    readmore: true,
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
          className={`${this.state.readmore ? "open" : `${this.props.icon} closed`}`}
          >
        </div>
        {/* <div className={this.state.readmore ? "underlayOpen" : "underlayClosed"}></div> */}

        <div className={this.state.readmore ? "borderTopOpen " : "borderTopClosed "}></div>
        <div className={`${this.state.readmore ? `${this.props.height} readMore` : "readMoreClosed"}`}>

          <div className="readMoreHeader">{this.props.title}</div>

            {this.props.layout === 'gallery' ?

              <div className="imageWrapper">
                <Image src={article.image1} mode='fill' height={64} width={96} />
                <Image src={article.image2} mode='fill' height={64} width={96} />
                <Image src={article.image1} mode='fill' height={64} width={96} />
                <Image src={article.image2} mode='fill' height={64} width={96} />
                <Image src={article.image1} mode='fill' height={64} width={96} />
              </div>

            : this.props.layout === 'audio' ?

              <div className="audioContent">

                <div className="audioTitle">{this.props.audioTitle}</div>

                <div className="buttonWrapper">
                  <div className="buttons backwards"></div>
                  <div className="buttons playAudio"></div>
                  <div className="buttons forwards"></div>
                </div>

                <div className="playbackContainer">
                  <div className="playCircle"></div>
                  <div className="playLine"></div>
                  <div className="timeContainer">
                    <div className="numbers">0.03</div>
                    <div className="numbers">-0.22</div>
                  </div>
                </div>

              </div>

            :

            <div className="videoContent">
              <Image src={article.video} mode='fill' width={360} height={130} margin="0px" />
            </div>

            }

        </div>
        <div className={this.state.readmore ? "borderBottomOpen " : "borderBottomClosed "}></div>
      </div>
    );
  }
}

export default Extra;
