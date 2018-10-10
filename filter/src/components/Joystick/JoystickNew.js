import React, { Component } from 'react';

class JoystickNew extends Component {
  state = {
    timeOut: 0,
  }

  constructor(props){
        super(props);
        this.timer = null;
    }

  onClick = (e) => {
    e.stopPropagation();
  }

  stopScroll = () => {
      clearTimeout(this.timer);
  }

  onMove = (e) => {
    e.persist();
    if (e.touches) {
      const clientY = e.touches[0].clientY || e.clientY;
      const offsetY = e.target.offsetTop || e.offsetTop;
      const y = clientY - offsetY;
      const centerOfJoystick = e.target.clientHeight/2;
      const tenPercentOfJoystick = e.target.clientHeight/10;
      const twentyPercentOfJoystick = tenPercentOfJoystick*2;
      const thirtyPercentOfJoystick = tenPercentOfJoystick*3;
      const fortyPercentOfJoystick = tenPercentOfJoystick*4;
      const fiftyPercentOfJoystick = tenPercentOfJoystick*5;
      const sixtyPercentOfJoystick = tenPercentOfJoystick*6;
      const seventyPercentOfJoystick = tenPercentOfJoystick*7;
      const eightyPercentOfJoystick = tenPercentOfJoystick*8;
      const ninetyPercentOfJoystick = tenPercentOfJoystick*9;

      if (y < tenPercentOfJoystick) {
        this.setState({timeOut: 10});
      } else if (y < twentyPercentOfJoystick && y > tenPercentOfJoystick) {
        this.setState({timeOut: 20});
      } else if (y < thirtyPercentOfJoystick && y > twentyPercentOfJoystick) {
        this.setState({timeOut: 30});
      } else if (y < fortyPercentOfJoystick && y > thirtyPercentOfJoystick) {
        this.setState({timeOut: 40});
      } else if (y < fiftyPercentOfJoystick && y > fortyPercentOfJoystick) {
        this.setState({timeOut: 50});
      }  else if (y < sixtyPercentOfJoystick && y > fiftyPercentOfJoystick) {
        this.setState({timeOut: 50});
      } else if (y < seventyPercentOfJoystick && y > sixtyPercentOfJoystick) {
        this.setState({timeOut: 40});
      } else if (y < eightyPercentOfJoystick && y > seventyPercentOfJoystick) {
        this.setState({timeOut: 30});
      } else if (y < ninetyPercentOfJoystick && y > eightyPercentOfJoystick) {
        this.setState({timeOut: 20});
      } else if (y > ninetyPercentOfJoystick) {
        this.setState({timeOut: 10});
      }

      if (y > centerOfJoystick) {
        window.scrollBy(0, 1);
        this.timer = setTimeout(() => this.onMove(e), this.state.timeOut);
      } else {
        window.scrollBy(0, -1);
        this.timer = setTimeout(() => this.onMove(e), this.state.timeOut);
      }

    }
  };

  stopDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

    render() {
        return (
            <div>

                <div
                  onClick={this.onClick}
                  onMouseMove={this.onMove}
                  onTouchStart={this.onMove}
                  onTouchEnd={this.stopScroll}
                  onTouchMove={this.stopDrag}
                  draggable='false'
                  className="joystick"
                  style={{
                    width: '25vw',
                    height: '25vw',
                    borderRadius: `50%`,
                    backgroundColor: 'lightgrey',
                    opacity: '0.5',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    KhtmlUserDrag: 'none',
                    KhtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    MsUserSelect: 'none',
                    position: 'fixed',
                    top: '70vh',
                    left: '70vw',
                    zIndex: '500',
                  }}>

              </div>

            </div>
        );
    }
}

export default JoystickNew;
