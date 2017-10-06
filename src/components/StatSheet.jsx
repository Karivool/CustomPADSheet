//The main life blood of the app
import React, { Component } from 'react';
import StatEmpty from './StatEmpty';
import StatLine from './StatLine';
import StatShow from './StatShow';

class StatSheet extends Component {
  reqChar() {
    return [];
  };

  render() {
    const characters = [];
    const charsIsEmpty = characters.length === 0;
    const charsIsntEmpty = characters.length >= 1;

    return (
      <div className="">
        <StatShow/>
          {charsIsEmpty && <StatEmpty/>}
          {charsIsntEmpty && <div className="">

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
          }
      </div>
    )
  }
}

export default StatSheet;
