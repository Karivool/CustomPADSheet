import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import { Router, browserHistory } from 'react-router';

import 'react-toolbox/lib/commons.scss';

import routes from './routes';

import App from './App';

const rootDomElement = document.querySelector('.container');

try {
  const provider = (
    <Provider store={ store }>
      <Router history={ browserHistory } routes={ routes }>
        <App/>
      </Router>
    </Provider>
  );
  render(provider, rootDomElement);
} catch (err) {
  console.error('Rendering error:', err);
  render(<RedBox error={ err } />, rootDomElement);
}
