import React, { Component } from 'react';
import ImageButton from '../ImageButton/ImageButton.js';
import './Image.css';

class Image extends Component {

  render() {

    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || `${20}vw`,
      width: width || `${30}vw`,
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      margin: '0 2vw 0 2vw',
    };

    return (
      <div className="imageContainer">
        {/* <ImageButton /> */}
        <div {...props} style={{...defaults, ...style, ...important}} />

      </div>
    );
  }
}


export default Image;
