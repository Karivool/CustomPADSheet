// User view bar with signout option
import React, { Component } from 'react';
import title from '../title.png'

class UserProfile extends Component {
  render() {
    return (
      <div className="">
        <img alt="Custom PADSheet" className="title" src={title}/>
      </div>
    )
  }
}

export default UserProfile;
