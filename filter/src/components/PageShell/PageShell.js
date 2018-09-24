import React,{ Component }  from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class PageShell extends Component {

render(){
  return(
    <div className="page">
    <CSSTransitionGroup
    transitionAppear={true}
    transitionAppearTimeout={600}
    transitionEnterTimeout={600}
    transitionLeaveTimeout={200}
    transitionName={'SlideIn'}
    >
    <Page {...props} />

    </CSSTransitionGroup>
    </div>

  );

}
}

export default PageShell;
