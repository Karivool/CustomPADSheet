import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearState } from '../localStorage.js';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  reqCity, openAddModal
}, dispatch);

const MainView = React.createClass({
  toggleAddModal: function() {
    this.props.openAddModal();
  },

  render() {
    const chars = this.props.chars;

    chars.forEach(function(char, idx) {
      char.data = data[idx];
    }.bind(data));


    return (

    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
