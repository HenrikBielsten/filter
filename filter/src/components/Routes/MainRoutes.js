import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Article from '../Article/Article';
import ArticleWrapper from '../ArticleWrapper/ArticlesWrapper.js';
import Articles from '../Articles/Articles.js';
import NotFound from '../NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Articles}/>
      <Route path='/aricles/:id' component={ArticleWrapper}/>
      <Route path='/articles/:id/chapters/:id' component={Article}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)
export default Router;
