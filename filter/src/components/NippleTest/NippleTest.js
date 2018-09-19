import React, { Component } from "react";
import ReactNipple from 'react-nipple';

class NippleTest extends Component {

  state = {
    upDown: 0,
  }

  constructor(props){
        super(props);
        this.timer = null;
    }

  // pressure = (evt,data) => {
  //   console.log(evt);
  // }

  scroll = (evt, data) => {
    this.stopScroll();
    console.log(data);
    console.log(data.direction);
    if (data.direction === undefined) {
      this.setState({
        upDown: 0,
      })
    }
    else if (data.direction.y === 'down') {
      this.setState({
        upDown: 1,
      })
    } else if (data.direction.y === 'up') {
      this.setState({
        upDown: -1,
      })
    }
    console.log(this.state.upDown);
    window.scrollBy(0, this.state.upDown); // horizontal and vertical scroll increments
    this.timer = setTimeout(() => this.scroll(evt,data), 20); // scrolls every X milliseconds
  }

  stopScroll = () => {
      clearTimeout(this.timer);
      console.log('stopped');
  }

    render() {
        return (
            <div>
                <ReactNipple
                    // supports all nipplejs options
                    // see https://github.com/yoannmoinet/nipplejs#options
                    options={{ mode: 'static', position: { top: '50%', left: '50%' }, color: 'green' }}
                    // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
                    style={{
                        outline: '1px solid red',
                        width: '20vh',
                        height: '20vh',
                        position: 'fixed',
                        top: '68vh',
                        left: '60vw',
                        // if you pass position: 'relative', you don't need to import the stylesheet
                    }}
                    // all events supported by nipplejs are available as callbacks
                    // see https://github.com/yoannmoinet/nipplejs#start

                      onMove={this.scroll}
                      onEnd={this.stopScroll}
                />
            </div>
        );
    }
}

export default NippleTest;
