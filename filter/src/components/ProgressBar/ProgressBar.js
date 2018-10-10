import React, { Component } from 'react';
import Filler from './Filler/Filler.js';
import './ProgressBar.css';
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
    var body = document.body;
    var value = (window.scrollY/(body.offsetHeight-window.innerHeight)*100);
    this.setState({ percentage: value})

 };
render() {
  return (
    <div className={`progressBar ${this.props.menuhidden}`}>
        <Filler percentage={this.state.percentage} />
    </div>
  )
}
}
export default ProgressBar;
