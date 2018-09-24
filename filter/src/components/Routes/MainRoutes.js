import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Article from '../Article/Article';
import Articles from '../Articles/Articles.js';
import NotFound from '../NotFound/NotFound';


// <Route path='/aricles/:id' component={ArticleWrapper}/>
// <Route path='/articles/:id/' component={Article}/>
// <Route path='/' component={Articles}/>
const Router = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Articles}/>
    <Route path='/articles/:id' component={Article}/>
    <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)
export default Router;
