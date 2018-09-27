import React, { Component } from "react";
import './HideAndShowPictures.css';

class HideAndShowPictures extends Component {

render() {
  return (
    <div className="hideAndShowPicturesWrapper">
      <div className="hideAndShowPicturesIcon"></div>
      <p className="hideAndShowPicturesText">
        Dölj/visa bilder
      </p>
    </div>
  )
}
}
export default HideAndShowPictures;
