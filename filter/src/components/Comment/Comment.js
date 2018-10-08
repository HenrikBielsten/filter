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
            <div>
              <p>Tango_lasse</p>
              <p>•</p>
              <p>2d</p>
            </div>
            <p>{this.props.title}</p>
            <p>{this.props.comment}</p>
            <div>Gå till forumet</div>
          </div>
        </div> )
        : ( <div className="comment"> {this.props.comments} </div>)
          }
      </div>
    );
  }
}


export default Comment;
