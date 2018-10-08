import React, { Component } from 'react';
import './Comment.css';
class Comment extends Component {
  constructor(props) {
   super(props);
   this.state = {
     readcomment: false
   };
   this.eventHandler = this.eventHandler.bind(this);
 }
 eventHandler(event) {
   event.stopPropagation();
   this.setState(prevState => ({
     readcomment: !prevState.navbar
   }));
 }

  render() {
    console.log(this.state.readcomment);
    return (
      <div className="commentsWrapper" onClick={this.eventHandler}>
      {this.state.readcomment ? (
        <div className="readComments">
          <p className="readCommentsTitle">Kommentarer på stycket från forumet</p>
          <div className="readCommentsBox">
          </div>
        </div> )
        : ( <div className="comment"> {this.props.comment} </div>)
          }
      </div>
    );
  }
}


export default Comment;
