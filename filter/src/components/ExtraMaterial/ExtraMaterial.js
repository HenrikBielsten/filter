import React, { Component } from 'react';
import './ExtraMaterial.css';
class ExtraMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contents: [
          {type: 'pictures', title: 'Coola faktan om den där grejen', checked: 'checked'},
          {type: 'movie', title: 'Coola faktan om den där grejen', checked: 'checked'},
          {type: 'movie', title: 'Coola faktan om den där grejen', checked: 'checked'},
          {type: 'pictures', title: 'Coola faktan om den där grejen', checked: 'false'},
          {type: 'audio', title: 'Coola faktan om den där grejen', checked: 'checked'},
          {type: 'pictures', title: 'Coola faktan om den där grejen', checked: 'false'},
          {type: 'audio', title: 'Coola faktan om den där grejen', checked: 'checked'}
        ]
  };
}
  render() {
    return (
      <div className="extraMaterialComponent">
        <p className="extraMaterialTitle">Extramaterial</p>
        <div>
        {this.state.contents.map((content, key) => {
          return (
          <div key={key} className="extraMaterialWrapper">
            <div className={`type ${content.type}`}></div>
            <div>
              <p className="extraMaterialText">{content.title}</p>
            </div>
              <div className={content.checked}></div>
          </div>
        );}

        )}
        </div>
      </div>
    );
  }
}


export default ExtraMaterial;
