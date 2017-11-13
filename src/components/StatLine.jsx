//One PAD character entry
import React, { Component } from 'react';

class StatLine extends Component {
  render() {
    const info = this.props.info;
    debugger
    return (
      <div className="statline">
        <div className="statshow-name">{info.name}</div>
        <div className="statshow-rarity">{info.rare}</div>
        <div className="statshow-cost">{info.cost}</div>
        <div className="statshow-element">{info.el1}</div>
        <div className="statshow-element">{info.el2}</div>
        <div className="statshow-type">{info.type1}</div>
        <div className="statshow-type">{info.type2}</div>
        <div className="statshow-type">{info.type3}</div>
        <div className="statshow-hp">{info.hp}</div>
        <div className="statshow-atk">{info.atk}</div>
        <div className="statshow-rcv">{info.rcv}</div>
        <div className="statshow-weighted">Weighted</div>
        <div className="statshow-leader">{info.leaderttl}</div>
        <div className="statshow-description">{info.leadertxt}</div>
        <div className="statshow-active">{info.activettl}</div>
        <div className="statshow-description">{info.activetxt}</div>
        <div className="statshow-cooldown">Cooldown</div>
        <div className="statshow-awakenings">Awakenings</div>
      </div>
    )
  }
}

export default StatLine;
