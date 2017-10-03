// Part of modal to show stat types
import React, { Component } from 'react';

class StatShow extends Component {
  render() {
    return (
      <div className="">
        <column className="statshow-title">Name</column>
        <column className="statshow-title">Rarity</column>
        <column className="statshow-title">Cost</column>
        <column className="statshow-title">El1</column>
        <column className="statshow-title">El2</column>
        <column className="statshow-title">Ty1</column>
        <column className="statshow-title">Ty2</column>
        <column className="statshow-title">Ty3</column>
        <column className="statshow-title">HP</column>
        <column className="statshow-title">Atk</column>
        <column className="statshow-title">RCV</column>
        <column className="statshow-title">Weighted</column>
        <column className="statshow-title">Leader Skill</column>
        <column className="statshow-title">Description</column>
        <column className="statshow-title">Active Skill</column>
        <column className="statshow-title">Description</column>
        <column className="statshow-title">Cooldown</column>
        <column className="statshow-title">Awakenings</column>
      </div>
    )
  }
}

export default StatShow;
