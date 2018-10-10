import React, { Component } from 'react';
import './HideAndShowPictures.css';

class HideAndShowPictures extends Component {

  state = {
    closed: false,
  }

  toggleClass = (e) => {
    e.stopPropagation();
    this.setState({
      closed: !this.state.closed
    })
  }


render() {
  return (
    <div
      className="hideAndShowPicturesWrapper"
      onClick={this.props.eventHandler}
      >
      <div className="hideAndShowPicturesIcon"></div>
      <div className="hideAndShowPicturesText">
        Dölj/visa bilder
      </div>
    </div>
  )
}
}
export default HideAndShowPictures;
