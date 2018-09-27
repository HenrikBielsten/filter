import React, { Component } from "react";
import './MenuBottom.css';
import NightMode from '../NightMode/NightMode.js';
import Fontsize from '../Fontsize/Fontsize.js';
import ChapterButton from '../ChapterButton/ChapterButton.js';
import HideAndShowPictures from '../HideAndShowPictures/HideAndShowPictures.js';

class MenuBottom extends Component {
  onClick = (e) => {
  e.stopPropagation();
  }

render() {
  return (
<<<<<<< HEAD
    <div className={`menuBottom ${this.props.hidden}`}>
=======
    <div
      onClick={this.onClick}
      className={`menuBottom ${this.props.menuHidden}`}>
>>>>>>> d20aaf465bd1d0c7b9ad4926813ade7eeec36685
      <div className="menuBottomContentWrapper">
        <Fontsize />
        <HideAndShowPictures />
        <ChapterButton />
        <NightMode />
      </div>
    </div>
  )
}
}
export default MenuBottom;
