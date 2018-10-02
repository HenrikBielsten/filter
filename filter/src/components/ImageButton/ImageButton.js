import React, { Component } from 'react';

import "./ImageButton.css";

class ImageButton extends Component {

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
      width: '2vh',
      height: '2vh',
      backgroundImage: `url("${src}")`,
      backgroundPosition: 'center center',
      backgroundSize: size,
      backgroundRepeat: 'no-repeat',
      zIndex: 10,
      position: 'relative',
      transform: 'translateY(8px)',
    };

    return (
      <div className='ImageButton' {...props} style={{...defaults, ...style, ...important}} />
    );
  }
}


export default ImageButton;
