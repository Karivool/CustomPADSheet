import React, { Component } from 'react';
import StatShow from './StatShow';
import StatForm from './StatForm';
import StatLine from './StatLine';
import StatSheet from './StatSheet';
import UserProfile from './UserProfile';

class MainPage extends Component {
  reqChar() {
    return [];
  };

  render() {
    const characters = [];

    return (
      <div className="">
        <h2>Puzzle and Dragons Custom Monsters</h2>
        <br/>
        <UserProfile/>
        <StatForm/>
        <StatShow/>
        { characters.map(function(info, idx) {
          if (info.data === undefined) {
            let infoCharacters = {charName: info.charName};
            this.reqChar(infoCharacters, info.charName);
          } else {
            return (<StatLine key={idx} idx={idx} info={info}/>);
          }
          })
        }

      </div>
    )
  }
}

export default MainPage;
