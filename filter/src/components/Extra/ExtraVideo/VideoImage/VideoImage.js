import React, { Component } from 'react';
import '../ExtraVideo.css';

class VideoImage extends Component {

  render() {

    let {mode, src, height, width, margin, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || `${20}vw`,
      width: width || `${30}vw`,
      margin: margin || `${0}vw ${4}vw ${0}vw ${0}vw`,
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',

    };

    return (
      <div className="imageContainer">
        <div {...props} style={{...defaults, ...style, ...important}} />

      </div>
    );
  }
}


export default VideoImage;
