import React, { Component } from 'react';
import ExtraGallery from './ExtraGallery/ExtraGallery';
import ExtraAudio from './ExtraAudio/ExtraAudio';
import ExtraVideo from './ExtraVideo/ExtraVideo';

import './Extra.css';

class Extra extends Component {
  constructor(props) {
  super(props);
  this.state = {
    readmore: true,
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

              <ExtraGallery />

            : this.props.layout === 'audio' ?

              <ExtraAudio audioTitle={this.props.audioTitle}/>

            :

              <ExtraVideo />

            }

        </div>
        <div className={this.state.readmore ? "borderBottomOpen " : "borderBottomClosed "}></div>
      </div>
    );
  }
}

export default Extra;
