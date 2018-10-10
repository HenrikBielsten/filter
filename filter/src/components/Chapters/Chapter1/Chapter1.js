import React, { Component } from 'react';
import JoystickNew from '../../Joystick/JoystickNew.js';
import Header from '../../Menus/Header/Header.js';
import ProgressBar from '../../ProgressBar/ProgressBar.js';
import MenuBottom from '../../Menus/MenuBottom/MenuBottom';
import Title from '../../Title/Title';
import Ingress from '../../Ingress/Ingress';
import Text from '../../Text/Text';
import SmallText from '../../SmallText/SmallText';
import articles from '../../Database/articles.js';
import Extra from '../../Extra/Extra.js';
import ExtraMaterial from '../../ExtraMaterial/ExtraMaterial.js';
import Image from '../../Image/Image.js';
import { Link } from '@reach/router';
import './Chapter1.css';


class Chapter1 extends Component{
  state = {
    articles: articles,
    togglemenus: true,
    readmore: false,
  }

  toggleMenu = (e) => {
    this.setState({
      togglemenus: !this.state.togglemenus
    })
  }
  toggleNightMode = (e) => {
    this.setState({
      nightMode: !this.state.nightMode
    })
  }

  eventHandler = () => {
    this.setState({
      readmore: !this.state.readmore,
    })
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {

    const article = this.state.articles[0];
    return (
      <div className={`chapterOne ${!this.state.togglemenus && 'menuDown'} ${this.state.nightMode && 'nightMode'}`} onClick={this.toggleMenu}>
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
        <Image mode='fill' margin={`0`} height={`50vw`} width={`100vw`} src={article.image0} />
          <SmallText text={article.type} />
          <Title title={article.title} />
          <SmallText text={article.author} />
          <SmallText text={article.illustrator} />
          <SmallText text={article.published} />
          <SmallText text={article.indicator} />
          <SmallText text={article.readtime} />
          <Ingress ingress={article.ingress} />
          <div className="lineSeperator"></div>
          <Text text={article.text} />
          <Text text={article.text2} />
          <Text text={article.text3} />
          <Text text={article.text4} />
          <Text text={article.text5} />
          <Text text={article.text6} />
          <Extra
            title={article.extraGalleryTitle}
            icon='gallery'
            height='galleryHeight'
            layout='gallery'
            eventHandler={this.state.readmore}
          />
          <Text text={article.text7} />
          <Text text={article.text8} comment='yes' />
          <Text text={article.text9} />
          <Text text={article.text10} />
          <Text text={article.text11} />
          <Text text={article.text12} />
          <Text text={article.text13} comment='yes' />
          <Text text={article.text14} />
          <Text text={article.text15} />
          <Text text={article.text16} />
          <Extra
            title={article.extraVideoTitle}
            icon='video'
            height='videoHeight'
            layout='video'
            eventHandler={this.state.readmore}
          />
          <Text text={article.text17} />
          <Text text={article.text18} />
          <Text text={article.text19} comment='yes' />
          <Text text={article.text20} />
          <Text text={article.text21} />
          <Text text={article.text22} />
          <Text text={article.text23} comment='yes' />
          <Text text={article.text24} />
          <Extra
            title={article.extraAudioTitle}
            audioTitle={article.audioTitle}
            icon='audio'
            height='audioHeight'
            layout='audio'
            eventHandler={this.state.readmore}
          />
          <Text text={article.text25} />
          <Text text={article.text26} />
          <Text text={article.text27} comment='yes'/>
          <Text text={article.text28} />
          <Text text={article.text29} />
          <Text text={article.text30} />
          <Text text={article.text31} />
          <Text text={article.text32} />
          <Text text={article.text33}  comment='yes'/>
          <Text text={article.text34} />
          <Text text={article.text35} />
          <Text text={article.text36} comment='yes' />
          <Text text={article.text37} />
          <Text text={article.text38} />
          <Text text={article.text39} />
          <Extra
            title={article.extraVideoTitle}
            icon='video'
            height='videoHeight'
            layout='video'
            eventHandler={this.state.readmore}
          />
          <Text text={article.text40} />
          <Text text={article.text41} />
          <Text text={article.text42} comment='yes' />
          <Text text={article.text43} />
          <Text text={article.text44} />
        <JoystickNew />
          <Link className="nextChapterWrapper" to={'/Chapter2'}>
            <div className="nextChapterText">
              Nästa Kapitel
                <div className="nextChapterButton"></div>
            </div>
          </Link>
          <ExtraMaterial />
        <MenuBottom toggleNightMode={this.toggleNightMode} eventHandler={this.eventHandler} menuhidden={this.state.togglemenus}/>
      </div>
    );
  }
}


export default Chapter1;
