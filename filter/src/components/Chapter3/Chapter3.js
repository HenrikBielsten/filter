import React, { Component } from 'react';
import JoystickNew from '../Joystick/JoystickNew.js';
import Header from '../Header/Header.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import MenuBottom from '../MenuBottom/MenuBottom';
import Text from '../Text/Text';
import articles from '../Database/articles.js';
import './Chapter3.css';
import { Link } from '@reach/router';
import ExtraMaterial from '../ExtraMaterial/ExtraMaterial.js';
import SimilarArticles from '../SimilarArticles/SimilarArticles.js';
import SmallText from '../SmallText/SmallText';

class Chapter3 extends Component{
  state = {
    articles: articles,
    togglemenus: true,
    readmore: true,
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

    const article = this.state.articles[2];
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
        <SmallText text={article.indecator} />
        <SmallText text={article.readtime} />
        <Text text={article.text} />
        <Text text={article.text2} />
        <Text text={article.text3} />
        <Text text={article.text4} />
        <Text text={article.text5} />
        <Text text={article.text6} />
        <Text text={article.text7} />
        <Text text={article.text8} />
        <Text text={article.text9} />
        <Text text={article.text10} comment='yes' />
        <Text text={article.text11} />
        <Text text={article.text12} />
        <Text text={article.text13} />
        <Text text={article.text14} />
        <Text text={article.text15} />
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
        <JoystickNew />
        <Link className="previousChapterWrapper" to={'/Chapter2'}>
          <div className="previousChapterText">
              <div className="previousChapterButton"></div>
              Föregående Kapitel
          </div>
        </Link>
        <ExtraMaterial />
        <SimilarArticles />
        <MenuBottom toggleNightMode={this.toggleNightMode} toggleImages={this.toggleImages} menuhidden={this.state.togglemenus}/>
      </div>
    );
  }
}


export default Chapter3;
