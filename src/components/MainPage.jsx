import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StatForm from './StatForm';
import StatSheet from './StatSheet';
import UserProfile from './UserProfile';

import { openForm, closeForm } from '../actions/char_actions.js';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  openForm, closeForm
}, dispatch);

class MainPage extends Component {
  toggleForm() {
    if (this.props.chars.formOpened) {
      this.props.closeForm();
    } else {
      this.props.openForm();
    }
  }

  render() {
    const openedForm = this.props.chars.formOpened === true;

    return (
      <div className="">
        <br/>
        <UserProfile/>
        <div className="mainpage-button" onClick={this.toggleForm.bind(this)}>Toggle Form</div>

        {openedForm && <StatForm/>}
        <StatSheet/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
