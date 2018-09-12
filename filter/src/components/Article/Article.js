import React from 'react';


const Article = (props) => (
  <div  value={props.item.id}className="Article">
    <h3> {props.item.title} </h3>
    <h5> {props.item.chapters[0]['title']} </h5>
    <p>{props.item.chapters[0]['text']}</p>
    <p>{props.item.chapters[0]['text2']}</p>
  </div>
)

export default Article;
