import React from 'react';
import ReactDOM from 'react-dom';

import Provider from '@store/index';
import App from './app';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = document.getElementById('Root');

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  Root
);
