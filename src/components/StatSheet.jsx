//The main life blood of the app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import StatEmpty from './StatEmpty';
import StatLine from './StatLine';
import StatShow from './StatShow';

import { reqChar } from '../actions/char_actions.js';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

class StatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3000/chars')
    .then(response => {
      this.setState({ chars: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

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
                reqChar(infoCharacters, info.charName);
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
