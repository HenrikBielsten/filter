import React, { Component } from "react";
import ChapterOne from './ChapterOne';
import ChapterTwo from './ChapterTwo';
import ChapterThree from './ChapterThree';

class Article extends Component {

render() {
  return (
    <div>
    <ChapterOne />
    <ChapterTwo />
    <ChapterThree />
    </div>
  )
}
}
export default Article;
