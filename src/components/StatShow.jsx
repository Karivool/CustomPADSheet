// Part of modal to show stat types
import React, { Component } from 'react';

class StatShow extends Component {
  render() {
    return (
      <div className="statshow-bar">
        <div className="statshow-name">Name</div>
        <div className="statshow-rare">Rare</div>
        <div className="statshow-cost">Cost</div>
        <div className="statshow-element">El1</div>
        <div className="statshow-element">El2</div>
        <div className="statshow-type">Ty1</div>
        <div className="statshow-type">Ty2</div>
        <div className="statshow-type">Ty3</div>
        <div className="statshow-hp">HP</div>
        <div className="statshow-atk">Atk</div>
        <div className="statshow-rcv">RCV</div>
        <div className="statshow-weighted">Weight</div>
        <div className="statshow-leader">Leader Skill</div>
        <div className="statshow-description">Description</div>
        <div className="statshow-active">Active Skill</div>
        <div className="statshow-description">Description</div>
        <div className="statshow-cooldown">Cooldown</div>
        <div className="statshow-awakenings">Awakenings</div>
      </div>
    )
  }
}

export default StatShow;
