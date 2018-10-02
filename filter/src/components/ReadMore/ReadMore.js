import React, { Component } from "react";
import "./ReadMore.css";
class ReadMore extends Component {
  constructor(props) {
  super(props);
  this.state = {
    readmore: false
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
    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || `${18}vh`,
      width: width || `${46}vw`,
    }

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div className="readMoreWrapper">

      <div
      onClick={this.eventHandler}
      className={this.state.readmore ? "open" : "closed"}
      >
      </div>

      {this.state.readmore ? (
        <div className="readMore">
        <h1>{this.props.title}</h1>
        <div className="logo" {...props} style={{...defaults, ...style, ...important}} />
        </div> ) : <div className="readMoreClosed"> </div>}

      </div>
    );
  }
}

export default ReadMore;
