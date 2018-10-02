import React, { Component } from "react";
import Header from "../Header/Header.js";
import "./ReadMore.css";
class ReadMore extends Component {
  constructor(props) {
  super(props);
  this.state = {
    readmore: false
  };
  this.eventHandler = this.eventHandler.bind(this);
}
eventHandler(event) {
  event.stopPropagation();
  this.setState(prevState => ({
    readmore: !prevState.readmore
  }));
}
  render() {
    return (
      <div className={this.state.readmore ? "readMore Open" : "readMore Closed"}>
        {this.state.readmore ? (
        <div className="readMore">
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </div> ) : <div className="readMore Closed">Read More </div>}

        <div
         onClick={this.eventHandler}
       >
       -------------
       </div>
      </div>
    );
  }
}

export default ReadMore;
