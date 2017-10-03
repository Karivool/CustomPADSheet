import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import MainPage from './components/MainPage';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/main-page' component={MainPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker();
