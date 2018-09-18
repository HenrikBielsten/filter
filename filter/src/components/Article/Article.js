<<<<<<< HEAD
import React, { Component } from "react";
import ChapterOne from './ChapterOne';
import ChapterTwo from './ChapterTwo';
import ChapterThree from './ChapterThree';
import './index.css';
class Article extends Component {

render() {
  return (
    <div>
      hej
    </div>
  )
}
}
=======
import React from 'react';
>>>>>>> 2986bb7c241189ede9b6c208ea822fde47e668cb


const Article = (props) => (
  <div  value={props.item.id}className="Article">
    <h3> {props.item.title} </h3>
    <h5> {props.item.chapters[0]['title']} </h5>
    <p>{props.item.chapters[0]['text']}</p>
    <p>{props.item.chapters[0]['text2']}</p>
  </div>
)

export default Article;
