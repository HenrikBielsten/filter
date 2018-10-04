import React, { Component } from 'react';
import Image from '../Image/Image.js';
import './Article.css';
class Test extends Component {
  constructor(props) {
  super(props);
  this.state = {
    readmore: false,
    showImages: true,
    imageIcon: false,
  };
  this.eventHandler = this.eventHandler.bind(this);
}

eventHandler = (e) => {
  e.stopPropagation();
  this.setState({
    readmore: !this.state.readmore
  })
}
  toggleImages = (e) => {
    e.stopPropagation();
    this.setState({
      showImages: !this.state.showImages,
      imageIcon: !this.state.imageIcon,
    })
  }



  render() {

    const chapters = this.props.text.map((item, key) => {
        if (item.includes('https:')) {
          return  ( <div className="imageContainer" height={`${this.state.showImages ? '50vw' : '0px'}`} key={key}>
          <div
          onClick={this.eventHandler}

          className="ImageButton"
          >
          </div>

          {this.state.readmore ?
            (

                <Image className="logo display" src={item} mode='fill' />

            )
            : <div className="readMoreClosed">

              </div>
          }

          </div>);
        }

        return (  <div
                    key={key}
                dangerouslySetInnerHTML={{__html: item}}
              />);
      });


    return (
        <div>
          {  chapters  }
        </div>
    );
  }
}


export default Test;
