//The main life blood of the app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import StatEmpty from './StatEmpty';
import StatLine from './StatLine';
import StatShow from './StatShow';

const mapStateToProps = state => {
  return {
    ...state
  }
}

class StatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:4200/chars')
    .then(response => {
      this.setState({ chars: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const characters = this.state.chars;
    const charsIsEmpty = characters.length === 0;
    const charsIsntEmpty = characters.length >= 1;

    return (
      <div className="statsheet">
        <StatShow/>
          {charsIsEmpty && <StatEmpty/>}
          {charsIsntEmpty && <div className="">

            { characters.map(function(info, idx) {
                return (<StatLine key={idx} idx={idx} info={info}/>);
              })
            }
            </div>
          }
      </div>
    )
  }
}

export default StatSheet;
