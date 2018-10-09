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
     readcomment: !prevState.readcomment
   }));
 }

  render() {
    console.log(this.state.readcomment);
    return (
      <div className={this.state.readcomment ? "commentsWrapper Open" : "commentsWrapper "} >
      {this.state.readcomment ? (
        <div className="readComments">
          <div className="readCommentsTitle">Kommentarer på stycket från forumet<div onClick={this.eventHandler} className="closeCommentsIcon"></div></div>
          <div className="lineBetween"></div>
          <div className="readCommentsBox">
            <div className="theCommentedBox">
              <p>Tango_lasse</p>
              <p className="dot">•</p>
              <p>2d</p>
            </div>
            <p className="commentArticleTitle">{this.props.title}</p>
            <p className="comment">{this.props.comment}</p>
            <div className="goToForumText">Gå till forumet <div className="goToForumIcon"></div></div>
          </div>
          <div className="lineBetween"></div>
          <div className="readCommentsBox">
            <div className="theCommentedBox">
              <p>Tango_lasse</p>
              <p className="dot">•</p>
              <p>2d</p>
            </div>
            <p className="commentArticleTitle">{this.props.title}</p>
            <p className="comment">{this.props.comment}</p>
            <div className="goToForumText">Gå till forumet <div className="goToForumIcon"></div></div>
          </div>
        </div>
      ): ( <div onClick={this.eventHandler} className="commentIcon"> {this.props.comments} </div>)
          }
      </div>
    );
  }
}


export default Comment;
