import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './ChapterButton.css';

class ChapterButton extends Component {

render() {
  return (
    <NavLink exact to="/">
      <div className="ChapterButtonWrapper">
        <div className="ChapterButtonIcon"></div>
        <div className="ChapterButtonText">
          Kapitel
        </div>
      </div>
    </NavLink>
  )
}
}
export default ChapterButton;
