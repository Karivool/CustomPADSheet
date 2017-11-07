import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
