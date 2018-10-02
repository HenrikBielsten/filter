import React, { Component } from 'react';
import articles from './articles.js';
// import { NavLink } from 'react-router-dom';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import "./Article.css";

class Article extends Component{

  state = {
    closed: false,
    oneClosed: false,
    menu: true,
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    const article = articles.filter(article => article.id === id);
    console.log(article);
    this.setState ({
      article: article[0]
    })
  }

  toggleClass = (e) => {
    // e.stopPropagation();
    this.setState({
      closed: !this.state.closed
    })
    console.log(this.state.closed);
  }

  toggleClassOnOne = (data) => {
    this.setState({
      oneClosed: !this.state.oneClosed
    })
    console.log(data);
  }

  toggleMenu = (e) => {
    this.setState({
      menu: !this.state.menu
    })
  }


  render() {
       return (
<<<<<<< HEAD
         <div key={this.state.article.id} className={`article ${this.state.togglemenus}`} onClick={this.toggleMenu}>
         <Header menuHidden={this.state.togglemenus}/>
         <ProgressBar menuHidden={this.state.togglemenus}/>
         <div
           style={{backgroundColor: 'green', height: '50px', width: '50px', position: 'fixed'}}
           onClick={this.toggleClass}
           >Press Me
         </div>
         <h3> {this.state.article.title} </h3>
         <h5> Chapter: {this.state.article.chapter} </h5>
         <p> {this.state.article.ingress} </p>
         <p>{this.state.article.text}</p>
         <div
           style={{backgroundColor: 'red', height: '50px', width: '50px'}}
           onClick={this.toggleClassOnOne}
           >Press Me
         </div>
         <div className={`${this.state.closed ? 'imgClosed' : 'imgOpen'} ${this.state.article.imageOne[0].name}`}></div>
         <p>{this.state.article.text2}</p>
         <div
           style={{backgroundColor: 'orange', height: '50px', width: '50px'}}
           onClick={this.toggleClassOnOne}
           >Press Me
         </div>
         <div className={`${this.state.closed ? 'imgClosed' : 'imgOpen'} ${this.state.article.imageTwo[0].name}`}></div>
         <p>{this.state.article.text3}</p>
         <p><NavLink exact to="/">Back</NavLink></p>
         <JoystickNew />
           <MenuBottom hidden={this.state.menu} />
         </div>
       );
     }
}


export default Article;
=======
// import React, { Component } from 'react';
// import articles from './articles.js';
// import { NavLink } from 'react-router-dom';
// import JoystickNew from '../Joystick/JoystickNew.js';
// import Header from '../Header/Header.js';
// import ProgressBar from '../ProgressBar/ProgressBar.js';
// import MenuBottom from '../MenuBottom/MenuBottom';
// import "./Article.css";
//
// class Article extends Component{
//
//   state = {
//     closed: false,
//     oneClosed: false,
//     togglemenus: true,
//   }
//
//   componentWillMount() {
//     const { id } = this.props.match.params;
//     const article = articles.filter(article => article.id === id);
//     console.log(article);
//     this.setState ({
//       article: article[0]
//     })
//   }
//
//   toggleClass = (e) => {
//     e.stopPropagation();
//     this.setState({
//       closed: !this.state.closed
//     })
//     console.log(this.state.closed);
//   }
//
//   toggleClassOnOne = (data) => {
//     this.setState({
//       oneClosed: !this.state.oneClosed
//     })
//     console.log(data);
//   }
//   toggleMenu = (e) => {
//     this.setState({
//       togglemenus: !this.state.togglemenus
//     })
//   }
//
//   render() {
//        return (
//          <div  key={this.state.article.id} className={`article ${this.state.togglemenus}`} onClick={this.toggleMenu}>
//          <Header menuHidden={this.state.togglemenus}/>
//          <ProgressBar menuHidden={this.state.togglemenus} />
//          <div
//            style={{backgroundColor: 'green', height: '50px', width: '50px', position: 'fixed'}}
//            onClick={this.toggleClass}
//            >Press Me
//          </div>
//          <h3> {this.state.article.title} </h3>
//          <h5> Chapter: {this.state.article.chapter} </h5>
//          <p> {this.state.article.ingress} </p>
//          <p>{this.state.article.text}</p>
//          <div
//            style={{backgroundColor: 'red', height: '50px', width: '50px'}}
//            onClick={this.toggleClassOnOne}
//            >Press Me
//          </div>
//          <div className={`${this.state.closed ? 'imgClosed' : 'imgOpen'} ${this.state.article.imageOne[0].name}`}></div>
//          <p>{this.state.article.text2}</p>
//          <div
//            style={{backgroundColor: 'orange', height: '50px', width: '50px'}}
//            onClick={this.toggleClassOnOne}
//            >Press Me
//          </div>
//          <div className={`${this.state.closed ? 'imgClosed' : 'imgOpen'} ${this.state.article.imageTwo[0].name}`}></div>
//          <p>{this.state.article.text3}</p>
//          <p><NavLink exact to="/">Back</NavLink></p>
//          <JoystickNew />
//          <MenuBottom menuHidden={this.state.togglemenus}/>
//          </div>
//        );
//      }
// }
//
//
// export default Article;
>>>>>>> d20aaf465bd1d0c7b9ad4926813ade7eeec36685
