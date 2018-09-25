import React, { Component } from 'react';
import articles from './articles.js';
import { NavLink } from 'react-router-dom';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import "./Article.css";

class Article extends Component{

  state = {
    closed: false,
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    const article = articles.filter(article => article.id === id);
    console.log(article);
    this.setState ({
      article: article[0]
    })
  }

  toggleClass = () => {
    this.setState({
      closed: !this.state.closed
    })
    console.log(this.state.closed);
  }

  render() {
       return (
         <div  key={this.state.article.id} className="Article">
         <Header />
         <ProgressBar />
         <h3> {this.state.article.title} </h3>
         <h5> Chapter: {this.state.article.chapter} </h5>
         <p> {this.state.article.ingress} </p>
         <p>{this.state.article.text}</p>
         <div
           style={{backgroundColor: 'green', height: '50px', width: '50px'}}
           onClick={this.toggleClass}
           >Press Me
         </div>
         {/* <img
           className={this.state.closed ? 'imgClosed' : 'imgOpen'}
           src={window.location.origin + '/images/' + this.state.article.image}
           alt="imageOne"
         /> */}
         <div className={`${this.state.closed ? 'imgClosed' : 'imgOpen'} ${this.state.article.image}`}></div>
         <p>{this.state.article.text2}</p>
         <p>{this.state.article.text3}</p>
         <p><NavLink exact to="/">Back</NavLink></p>
         <JoystickNew />
         <MenuBottom />
         </div>
       );
     }
}


export default Article;
