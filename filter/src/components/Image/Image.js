import React, { Component } from 'react';
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
console.log(src);
    return (
      <div className="imageContainer">
        <div {...props} style={{...defaults, ...style, ...important}} />

      </div>
    );
  }
}


export default Image;
