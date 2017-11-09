import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store.js';

import App from './App';
import MainPage from './components/MainPage';
import StatForm from './components/StatForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/main-page' component={MainPage} />
        <Route path='/add-char' component={StatForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
