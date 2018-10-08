import React, { Component } from 'react';

import '../Extra.css';
import './ExtraAudio.css';

class ExtraAudio extends Component {

  render() {

    return (

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

    );
  }
}

export default ExtraAudio;
