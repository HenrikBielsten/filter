import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import { Link } from "@reach/router";
import './ChapterButton.css';

class ChapterButton extends Component {

render() {
  return (
    <Link to="/">
      <div className="chapterButtonWrapper">
        <div className="chapterButtonIcon"></div>
        <div className="chapterButtonText">
          Kapitel
        </div>
      </div>
    </Link>

  )
}
}
export default ChapterButton;
