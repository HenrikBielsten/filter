import React from 'react';

const Article = (props) => (
  <div  key={props.item.id} className="Article">
    <h3> {props.item.title} </h3>
    <h5> {props.item.chapters} </h5>
    <p>{props.item.text}</p>
    <p>{props.item.text2}</p>
  </div>
)

export default Article;
