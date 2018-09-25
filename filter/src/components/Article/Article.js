import React, { Component } from 'react';
import articles from './articles.js';
import { NavLink } from 'react-router-dom';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';

class Article extends Component{
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
         <Header />
         <h3> {this.state.article.title} </h3>
         <h5> Chapter: {this.state.article.chapter} </h5>
         <p> {this.state.article.ingress} </p>
         <p>{this.state.article.text}</p>
         <img src="/../../images/everipedia-1.jpg" style={{height: '100px', width: '100px'}} alt="hej"/>
         <p>{this.state.article.text2}</p>
         <p>{this.state.article.text3}</p>
         <p><NavLink exact to="/">Back</NavLink></p>
         <JoystickNew />
         </div>
       );
     }
}

// {`/../../images/${this.state.article.image}`}



export default Article;
