// CharService.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { addChar } from '../actions/char_actions.js';

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addChar
}, dispatch);

class CharService extends Component {
  constructor(props) {
    super(props);
    this.addChar = addChar;
  }

  sendData(data) {
    axios.post('http://localhost:4200/chars/add/post', {
    char: data
  })
  .then(res => this.addChar(data).bind(this))
  .catch(err => console.log(err))
}

  updateData(data, id){
    axios.post('http://localhost:4200/chars/update/'+id, {
      item: data
    })
    .then(res => this.setState({ chars: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/chars/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default CharService;
