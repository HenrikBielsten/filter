import React, { Component } from "react";

class JoystickNew extends Component {

  // state = {
  //   upDown: 0,
  //   velocity: 0,
  // }
  //
  constructor(props){
        super(props);
        this.timer = null;
    }


    // this.timer = setTimeout(() => this.scroll(evt,data), this.state.velocity); // scrolls every X milliseconds

  stopScroll = () => {
      clearTimeout(this.timer);
      console.log('stopped');
  }

  // const joystick = document.querySelector('.joystick');
  onMove = (e) => {
    e.persist();
    console.log(e);
    if (e.touches) {
      
      console.log('touched');

      const clientY = e.touches[0].clientY || e.clientY;
      const offsetY = e.target.offsetTop || e.offsetTop;
      const y = clientY - offsetY

      console.log(clientY - offsetY);

      if (y > 50) {
        // console.log('>50');
        window.scrollBy(0, 1);
        this.timer = setTimeout(() => this.onMove(e), 20);
      } else {
        // console.log('<50');
        window.scrollBy(0, -1);
        this.timer = setTimeout(() => this.onMove(e), 20);
      }

    }
  };

  // joystick.addEventListener('mousemove', onMove); // mousemove, mouseover, mouseout
  // joystick.addEventListener('touchmove', onMove); // touchstart, touchmove, touchend

    render() {
        return (
            <div>

                <div
                  onMouseMove={this.onMove}
                  onTouchStart={this.onMove}
                  onTouchEnd={this.stopScroll}
                  className="joystick"
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'dodgerblue',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    KhtmlUserDrag: 'none',
                    KhtmlUserSelect: 'none',
                    MozUserSelect: 'none',
                    MsUserSelect: 'none',
                    position: 'fixed',
                    top: '60vh',
                    left: '65vw',
                  }}>

              </div>

            </div>
        );
    }
}

export default JoystickNew;
