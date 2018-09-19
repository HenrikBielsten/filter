import React, { Component } from 'react';
import Filler from '../Filler/Filler.js';
import './index.css';
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  };


  handleScroll() {
   // var winHeight = window.Height;

    var body = document.body;
    // var html = document.documentElement;
    // var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
             // html.clientHeight, html.scrollHeight, html.offsetHeight );

    var value = (window.scrollY/(body.offsetHeight-window.innerHeight)*100);
    this.setState({ percentage: value})

 };
render() {
  return (
    <div className="progress-bar">
        <Filler percentage={this.state.percentage} />
    </div>
  )
}
}
export default ProgressBar;
