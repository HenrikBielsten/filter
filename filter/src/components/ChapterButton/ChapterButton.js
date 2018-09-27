import React, { Component } from "react";
import './ChapterButton.css';

class ChapterButton extends Component {

render() {
  return (
      <div className="chapterButtonWrapper">
        <div className="chapterButtonIcon"></div>
        <div className="chapterButtonText">
          Kapitel
        </div>
      </div>
  )
}
}
export default ChapterButton;
