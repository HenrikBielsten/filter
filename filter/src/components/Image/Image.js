import React, { Component } from 'react';
import ImageButton from '../ImageButton/ImageButton.js';

import "./Image.css";

class Image extends Component {

  render() {

    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || `${50}vw`,
      width: width || `${89}vw`,
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      transition: '.3s',
      boxShadow: '1.5px 1.5px 5px grey',
      borderTop: '2px #DAB0A0 solid',
    };

    return (
      <div className="imageContainer">
        <ImageButton />
        <div {...props} style={{...defaults, ...style, ...important}} />

      </div>
    );
  }
}


export default Image;
