import React, { Component } from 'react';
import StatShow from './StatShow'

class MainPage extends Component {
  render() {
    return (
      <div className="">
        <h2>Puzzle and Dragons Custom Monsters</h2>
        <br/>
        <StatShow/>
        <table>
          Table of contents
        </table>
      </div>
    )
  }
}

export default MainPage;
