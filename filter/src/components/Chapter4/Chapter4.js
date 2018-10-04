import React, { Component } from 'react';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import Title from '../Title/Title';
import Ingress from '../Ingress/Ingress';
import SmallText from '../SmallText/SmallText';
import chapters from '../Database/test.js';
import './Article.css';
import { Link } from '@reach/router';
import Test from './test.js';
class Chapter4 extends Component{
    state = {
      chapters: chapters,
      togglemenus: true,
      showImages: true,
      imageIcon: false,
    }

    toggleMenu = (e) => {
      this.setState({
        togglemenus: !this.state.togglemenus
      })
    }

    toggleImages = () => {
      this.setState({
        showImages: !this.state.showImages,
        imageIcon: !this.state.imageIcon,
      })
    }
    componentDidMount(){
      window.scrollTo(0, 0)
    }


  render() {
    const chapter = this.state.chapters[0];
    return (
      <div className={`chapterFour ${this.state.togglemenus}`} onClick={this.toggleMenu}>
        <Header
          menuhidden={this.state.togglemenus.toString()}
          src={window.location.origin + '/icons/Filter_logo_F_white.svg'} mode='fit'
          title={chapter.title}
          dot={` • `}
          id={chapter.chapter}
          extra={`/`}
          lastid={this.state.chapters.length}
        />
        <ProgressBar menuhidden={this.state.togglemenus} />
        <Title title={chapter.title} />
        <SmallText text={chapter.author} />
        <SmallText text={chapter.illustrator} />
        <SmallText text={chapter.published} />
        <Ingress ingress={chapter.ingress} />
        <Test text={chapter.content}  />
        <JoystickNew />
        <Link to={'/Chapter2'}>Föregående Kapitel</Link>
        <MenuBottom toggleImages={this.toggleImages} menuhidden={this.state.togglemenus}/>
        </div>
    );
  }
}


export default Chapter4;
