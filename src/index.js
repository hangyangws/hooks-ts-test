import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from 'Components/Layout/index';
import DashBoard from 'Pages/DashBoard/index';
import Agent from 'Pages/Agent/index';
import MyCruise from 'Pages/MyCruise/index';
import Help from 'Pages/Help/index';
import NotFound from 'Pages/NotFound/index';

import '@babel/polyfill';
import 'Resource/css/base.css';
import 'Resource/css/fonts.css';

import history from './history';

const Root = document.getElementById('Root');

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/agent" />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/agent" component={Agent} />
        <Route path="/mycruise" component={MyCruise} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>,
  Root
);
