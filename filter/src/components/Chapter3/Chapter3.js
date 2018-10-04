import React, { Component } from 'react';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import Title from '../Title/Title';
import Ingress from '../Ingress/Ingress';
import Text from '../Text/Text';
import Image from '../Image/Image';
import articles from '../Database/articles.js';
import ReadMore from '../ReadMore/ReadMore.js';
import './Chapter3.css';
import { Link } from '@reach/router';
class Chapter3 extends Component{

  state = {
    articles: articles,
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

    const article = this.state.articles[2];
    return (
      <div className={`chapterOne ${this.state.togglemenus}`} onClick={this.toggleMenu}>
        <Header
          menuhidden={this.state.togglemenus.toString()}
          src={window.location.origin + '/icons/Filter_logo_F_white.svg'} mode='fit'
          title={article.title}
          dot={` • `}
          id={article.chapter}
          extra={`/`}
          lastid={this.state.articles.length}
        />
        <ProgressBar menuhidden={this.state.togglemenus} />
        <Title title={article.title} />
        <Ingress ingress={article.ingress} />
        <ReadMore  src={article.image1} title={article.extraTitle} />
        <Text text={article.text} />
        <Text text={article.text2} />
        <Text text={article.text3} />
        <Text text={article.text4} />
        <Text text={article.text5} />
        <Text text={article.text6} />
        <Text text={article.text7} />
        <Text text={article.text8} />
        <Text text={article.text9} />
        <Text text={article.text10} />
        <Text text={article.text11} />
        <Text text={article.text12} />
        <Text text={article.text13} />
        <Text text={article.text14} />
        <Text text={article.text15} />
        <ReadMore src={article.image2} title={article.extraTitle} content={article.extraContent} />
        <Image src={article.image1} mode='fill' height={`${this.state.showImages ? '50vw' : '0px'}`} />
        <Text text={article.text15} />
        <Text text={article.text16} />
        <Text text={article.text17} />
        <Text text={article.text18} />
        <Text text={article.text19} />
        <Text text={article.text20} />
        <Text text={article.text21} />
        <Text text={article.text22} />
        <Text text={article.text23} />
        <Text text={article.text24} />
        <Text text={article.text25} />
        <Text text={article.text26} />
        <Text text={article.text27} />
        <Text text={article.text28} />
        <Text text={article.text29} />
        <Text text={article.text30} />
        <Text text={article.text31} />
        <Text text={article.text32} />
        <Text text={article.text33} />
        <Text text={article.text34} />
        <Text text={article.text35} />
        <Text text={article.text36} />
        <Text text={article.text37} />
        <Text text={article.text38} />
        <Text text={article.text39} />
        <Text text={article.text40} />
        <Text text={article.text41} />
        <Text text={article.text42} />
        <Image src={article.image2} mode='fill' height={`${this.state.showImages ? '50vw' : '0vw'}`} />
        <JoystickNew />
        <Link to={'/Chapter2'}>Föregående Kapitel</Link>
        <MenuBottom toggleImages={this.toggleImages} menuhidden={this.state.togglemenus}/>
      </div>
    );
  }
}


export default Chapter3;
