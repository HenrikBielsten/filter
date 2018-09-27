import React, { Component } from "react";
import './MenuBottom.css';
import NightMode from '../NightMode/NightMode.js';
import Fontsize from '../Fontsize/Fontsize.js';
import ChapterButton from '../ChapterButton/ChapterButton.js';
import HideAndShowPictures from '../HideAndShowPictures/HideAndShowPictures.js';

class MenuBottom extends Component {

render() {
  return (
    <div className={`menuBottom ${this.props.hidden}`}>
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
