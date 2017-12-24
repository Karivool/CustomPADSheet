//The main life blood of the app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import StatEmpty from './StatEmpty';
import StatLine from './StatLine';
import StatShow from './StatShow';

import { getChars } from '../actions/char_actions.js';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getChars
}, dispatch);

class StatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: []
    };
  }

  componentDidMount(){
    let base = process.env.baseURL || "http://localhost:4200";
    console.log(process.env.baseURL);
    
    return axios({
      method: "get",
      url: base + "/chars",
    })
    .then(res => this.props.getChars(res.data))
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const characters = this.props.chars.chars;
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

export default connect(mapStateToProps, mapDispatchToProps)(StatSheet);
