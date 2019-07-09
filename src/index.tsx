import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '@components/Layout/index';
import DashBoard from '@pages/DashBoard/index';
import Agent from '@pages/Agent/index';
import MyCruise from '@pages/MyCruise/index';
import Help from '@pages/Help/index';
import NotFound from '@pages/NotFound/index';

import '@babel/polyfill';
import '@resource/css/base.css';
import '@resource/css/fonts.css';

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
