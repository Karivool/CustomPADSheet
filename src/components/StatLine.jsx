//One PAD character entry
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { killChar } from '../actions/char_actions.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  killChar
}, dispatch);

class StatLine extends Component {
  delete() {
    let base = process.env.baseURL || "http://localhost:4200";
    let id = this.props.info._id

    return axios({
      method: "get",
      url: base + '/chars/delete/' + id,
    })
    .then(res => this.props.killChar(id))
    .catch(err => console.log(err))
  }

  render() {
    const AWAKES = require('../constants/awakenings.js');
    const TYPES = require('../constants/types.js');
    const ELEMENTS = require('../constants/elements.js');

    let info = this.props.info;
    info.aw1 = AWAKES[info.aw1];
    info.aw2 = AWAKES[info.aw2];
    info.aw3 = AWAKES[info.aw3];
    info.aw4 = AWAKES[info.aw4];
    info.aw5 = AWAKES[info.aw5];
    info.aw6 = AWAKES[info.aw6];
    info.aw7 = AWAKES[info.aw7];
    info.aw8 = AWAKES[info.aw8];
    info.aw9 = AWAKES[info.aw9];
    info.el1 = ELEMENTS[info.el1];
    info.el2 = ELEMENTS[info.el2];
    info.type1 = TYPES[info.type1];
    info.type2 = TYPES[info.type2];
    info.type3 = TYPES[info.type3];
    let weight = (info.hp/10 + info.atk/5 + info.rcv/3).toFixed(2)
    let cooldown
    if (info.cooldownmax === 0 || info.cooldownmax === null) {
      cooldown = ""
    } else {
      cooldown = `${info.cooldownmax} (${info.cooldownmin})`
    }

    return (
      <div className="statline">
        <div className="statshow-name">{info.name}</div>
        <div className="statshow-rare">{info.rare}</div>
        <div className="statshow-cost">{info.cost}</div>
        <div className="statshow-element">
          <img className="statshow-img" alt="" src={info.el1}></img>
        </div>
        <div className="statshow-element">
          <img className="statshow-img" alt="" src={info.el2}></img>
        </div>
        <div className="statshow-type">
          <img className="statshow-img" alt="" src={info.type1}></img>
        </div>
        <div className="statshow-type">
          <img className="statshow-img" alt="" src={info.type2}></img>
        </div>
        <div className="statshow-type">
          <img className="statshow-img" alt="" src={info.type3}></img>
        </div>
        <div className="statshow-hp">{info.hp}</div>
        <div className="statshow-atk">{info.atk}</div>
        <div className="statshow-rcv">{info.rcv}</div>
        <div className="statshow-weighted">{weight}</div>
        <div className="statshow-leader">{info.leaderttl}</div>
        <div className="statshow-description">{info.leadertxt}</div>
        <div className="statshow-active">{info.activettl}</div>
        <div className="statshow-description">{info.activetxt}</div>
        <div className="statshow-cooldown">{cooldown}</div>
        <div className="statshow-awakenings">
          <img className="statshow-img" alt="" src={info.aw1}></img>
          <img className="statshow-img" alt="" src={info.aw2}></img>
          <img className="statshow-img" alt="" src={info.aw3}></img>
          <img className="statshow-img" alt="" src={info.aw4}></img>
          <img className="statshow-img" alt="" src={info.aw5}></img>
          <img className="statshow-img" alt="" src={info.aw6}></img>
          <img className="statshow-img" alt="" src={info.aw7}></img>
          <img className="statshow-img" alt="" src={info.aw8}></img>
          <img className="statshow-img" alt="" src={info.aw9}></img>
        </div>
        <div className="statshow-edit"><img className="statshow-img-i" src="/images/edit.png" alt="edit"></img></div>
        <div className="statshow-delete"><img className="statshow-img-i" src="/images/trash.png" alt="trash" onClick={this.delete.bind(this)}></img></div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(StatLine);
