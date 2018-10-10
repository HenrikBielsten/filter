import React, { Component } from 'react';
import './Image.css';

class VideoImage extends Component {

  state = {
    expand: false,
  }

  expand = (event) => {
    event.stopPropagation();
    this.setState({
      expand: !this.state.expand,
    })
  }

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
      // margin: margin || `${0}vw ${4}vw ${0}vw ${0}vw`,
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div className={`${this.state.expand ? 'imgContainerOpen' : 'imgContainerClosed'}`}
        onClick={this.expand}>
        <div {...props} style={{...defaults, ...style, ...important}} ></div>

        {this.state.expand ?

          <div className="imgTextWrapper">
            <div className="imgText">{this.props.imgText}</div>
          </div>

          : <div></div>

        }
      </div>
    );
  }
}


export default VideoImage;
