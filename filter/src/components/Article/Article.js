import React from 'react';


const Article = (props) => (
  <div className="Article">
    <h3> {props.item.title} </h3>
    <p>{props.item.text}</p>
    <p>{props.item.text2}</p>
  </div>
)

export default Article;
