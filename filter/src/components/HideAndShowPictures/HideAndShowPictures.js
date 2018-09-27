import React, { Component } from "react";
import './HideAndShowPictures.css';

class HideAndShowPictures extends Component {

render() {
  return (
    <div className="HideAndShowPicturesWrapper">
      <div className="HideAndShowPicturesIcon"></div>
      <p className="HideAndShowPicturesText">
        Dölj/visa bilder
      </p>
    </div>
  )
}
}
export default HideAndShowPictures;
