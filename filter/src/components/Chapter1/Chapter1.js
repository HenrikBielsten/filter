import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import Title from '../Title/Title';
import Ingress from '../Ingress/Ingress';
import Text from '../Text/Text';
import Image from '../Image/Image';
import BigText from '../BigText/BigText';
import articles from '../Database/articles.js';

import "./Article.css";
// import Test from './test.js';

class Chapter1 extends Component{

  state = {
    articles: articles,
  }

  render() {

    const article = this.state.articles[0];

    return (
      <div className="chapter1 chapter">
        <Header />
        <ProgressBar />
        <Title title={article.title} />
        <Ingress ingress={article.ingress} />
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
        <Image src={article.image1} mode='fit' />
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
        <BigText bigText={article.bigText1} />
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
        <BigText bigText={article.bigText2} />
        <Text text={article.text36} />
        <Text text={article.text37} />
        <Text text={article.text38} />
        <Text text={article.text39} />
        <Text text={article.text40} />
        <Text text={article.text41} />
        <Text text={article.text42} />
        <Image src={article.image2} mode='fit' />
        <JoystickNew />
        <MenuBottom />
      </div>
    );
  }
}


export default Chapter1;
