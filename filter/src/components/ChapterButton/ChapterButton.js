import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './ChapterButton.css';

class ChapterButton extends Component {

render() {
  return (
    <NavLink exact to="/">
      <div className="chapterButtonWrapper">
        <div className="chapterButtonIcon"></div>
        <div className="chapterButtonText">
          Kapitel
        </div>
      </div>
    </NavLink>
  )
}
}
export default ChapterButton;
