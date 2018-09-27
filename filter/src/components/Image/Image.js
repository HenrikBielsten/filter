import React, { Component } from 'react';

class Image extends Component {

  render() {

    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || `${37.55}vh`,
      width: width || `${100}vw`,
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div {...props} style={{...defaults, ...style, ...important}} />
    );
  }
}


export default Image;
