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
    <div
      onClick={this.onClick}
      className={`menuBottom ${this.props.menuhidden}`}>
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
