import React, { Component } from 'react';
import StatForm from './StatForm';
import StatSheet from './StatSheet';
import UserProfile from './UserProfile';

class MainPage extends Component {
  render() {
    return (
      <div className="">
        <br/>
        <UserProfile/>
        <StatForm/>
        <StatSheet/>
      </div>
    )
  }
}

export default MainPage;
