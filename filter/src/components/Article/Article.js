import React, { Component } from 'react';
import articles from './articles.js';
import { NavLink } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import Joystick from '../Joystick/Joystick.js';

class Article extends Component{
  constructor(props) {
    super(props)

};
  componentWillMount() {
    const { id } = this.props.match.params;
    const article = articles.filter(article => article.id === id);
    console.log(article);
    this.setState ({
      article: article[0]
    })
    }
  render() {
       return (
         <div  key={this.state.article.id} className="Article">
         <ProgressBar />
         <h3> {this.state.article.title} </h3>
         <h5> Chapter: {this.state.article.chapter} </h5>
         <p> {this.state.article.ingress} </p>
         <p>{this.state.article.text}</p>
         <p>{this.state.article.text2}</p>
         <p><NavLink exact to="/">Back</NavLink></p>
         <Joystick />
         </div>
       );
     }
}




export default Article;
