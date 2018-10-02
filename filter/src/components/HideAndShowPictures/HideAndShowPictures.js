import React, { Component } from "react";
import './HideAndShowPictures.css';

class HideAndShowPictures extends Component {

  state = {
    closed: false,
  }

  toggleClass = (e) => {
    this.setState({
      closed: !this.state.closed
    })
  }

render() {
  return (
    <div
      className="hideAndShowPicturesWrapper"
      onClick={this.props.toggleImages}
      >
      <div className="hideAndShowPicturesIcon"></div>
      <p className="hideAndShowPicturesText">
        Dölj/visa bilder
      </p>
    </div>
  )
}
}
export default HideAndShowPictures;
