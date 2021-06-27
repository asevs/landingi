import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../rotues';
import { Navbar } from '../components';
import { PostsPage } from './PostsPage.module.css/PostsPage';
import { PostDetailsPage } from './PostDetailsPage';
import { Provider } from 'react-redux';
import store from '../redux/store';
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={routes.home} component={PostsPage} />
          <Route exact path={routes.posts} component={PostsPage} />
          <Route path={routes.post} component={PostDetailsPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
