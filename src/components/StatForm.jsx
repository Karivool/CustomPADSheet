// Create a new character from here
import React, { Component } from 'react';
import ImageSelect from './ImageSelect';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChar } from '../actions/char_actions.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  addChar
}, dispatch);

class StatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rare: "",
      cost: "",
      el1: "fire",
      el2: "",
      type1: "attacker",
      type2: "",
      type3: "",
      hp: "",
      atk: "",
      rcv: "",
      weighted: 0,
      leaderttl: "",
      leadertxt: "",
      activettl: "",
      activetxt: "",
      aw1: "",
      aw2: "",
      aw3: "",
      aw4: "",
      aw5: "",
      aw6: "",
      aw7: "",
      aw8: "",
      aw9: "",
      cooldownmax: "",
      cooldownmin: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendData(data) {
    axios.post('http://localhost:4200/chars/add/post', {
    char: data
  })
  .then(res => this.props.addChar(data))
  .catch(err => console.log(err))
  }

  calcWeight() {
    let hp;
    let atk;
    let rcv;
    if (this.state.hp === "") {
      hp = 0;
    } else {
      hp = this.state.hp / 10;
    }
    if (this.state.atk === "") {
      atk = 0;
    } else {
      atk = this.state.atk / 5;
    }
    if (this.state.rcv === "") {
      rcv = 0;
    } else {
      rcv = this.state.rcv / 3;
    }
    this.setState({
      weighted: (hp + atk + rcv).toFixed(2),
    });

  }

  handleChange(property, event) {
    if (property === "hp" || property === "atk" || property === "rcv") {
      this.calcWeight();
    }
    this.setState({
      [property]: event.target.value,
    });
  }

  handleAwakening(property, value) {
    this.setState({
      [property]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.addChar(this.state);
    this.sendData(
      this.state
    );
  }

  render() {
    const options = ["aw1","aw2","aw3","aw4","aw5","aw6","aw7","aw8","aw9"];

    return (
      <div className="statform-formbox">
        Add New Character:
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} className="statform-form-text"/><br/>
          Rare: <input type="number" maxLength="2" value={this.state.rare} onChange={this.handleChange.bind(this, "rare")} className="statform-form-number"/>
          Cost: <input type="number" maxLength="3" value={this.state.cost} onChange={this.handleChange.bind(this, "cost")} className="statform-form-number"/><br/>
        <label>Element1: <select value={ this.state.el1 }className="statform-form-element" onChange={this.handleChange.bind(this, "el1")}>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="wood">Wood</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option></select></label>
          Element2:<select value={ this.state.el2 } className="statform-form-element" onChange={this.handleChange.bind(this, "el2")}>
            <option value="">none</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="wood">Wood</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option></select><br/>
          Type1: <select value={ this.state.type1 } className="statform-form-type" onChange={this.handleChange.bind(this, "type1")}>
            <option value="attacker">Attacker</option>
            <option value="balanced">Balanced</option>
            <option value="devil">Devil</option>
            <option value="dragon">Dragon</option>
            <option value="healer">Healer</option>
            <option value="god">God</option>
            <option value="machine">Machine</option>
            <option value="physical">Physical</option>
            <option value="awoken">Awakening Material</option>
            <option value="evo">Evo Material</option>
            <option value="enhance">Enhanced Material</option>
            <option value="redeem">Redeemable Material</option>
            </select><br/>
          Type2: <select value={ this.state.type2 } className="statform-form-type" onChange={this.handleChange.bind(this, "type2")}>
            <option value="">none</option>
            <option value="attacker">Attacker</option>
            <option value="balanced">Balanced</option>
            <option value="devil">Devil</option>
            <option value="dragon">Dragon</option>
            <option value="healer">Healer</option>
            <option value="god">God</option>
            <option value="machine">Machine</option>
            <option value="physical">Physical</option>
            <option value="awoken">Awakening Material</option>
            <option value="evo">Evo Material</option>
            <option value="enhance">Enhanced Material</option>
            <option value="redeem">Redeemable Material</option>
            </select><br/>
          Type3: <select value={ this.state.type3 } className="statform-form-type" onChange={this.handleChange.bind(this, "type3")}>
            <option value="">none</option>
            <option value="attacker">Attacker</option>
            <option value="balanced">Balanced</option>
            <option value="devil">Devil</option>
            <option value="dragon">Dragon</option>
            <option value="healer">Healer</option>
            <option value="god">God</option>
            <option value="machine">Machine</option>
            <option value="physical">Physical</option>
            <option value="awoken">Awakening Material</option>
            <option value="evo">Evo Material</option>
            <option value="enhance">Enhanced Material</option>
            <option value="redeem">Redeemable Material</option>
            </select><br/>
          HP:  <input type="number" maxLength="5" value={this.state.hp} onChange={this.handleChange.bind(this, "hp")} className="statform-form-number"/>
          ATK: <input type="number" maxLength="5" value={this.state.atk} onChange={this.handleChange.bind(this, "atk")} className="statform-form-number"/>
          RCV: <input type="number" maxLength="5" value={this.state.rcv} onChange={this.handleChange.bind(this, "rcv")} className="statform-form-number"/>
          Weighted: {this.state.weighted}<br/>
          Leader Skill: <input type="text" value={this.state.leaderttl} onChange={this.handleChange.bind(this, "leaderttl")} className="statform-form-text"/><br/>
          Description:  <input type="text" value={this.state.leadertxt} onChange={this.handleChange.bind(this, "leadertxt")} className="statform-form-text"/><br/>
          Active Skill: <input type="text" value={this.state.activettl} onChange={this.handleChange.bind(this, "activettl")} className="statform-form-text"/><br/>
          Description:  <input type="text" value={this.state.activetxt} onChange={this.handleChange.bind(this, "activetxt")} className="statform-form-text"/><br/>
          Cooldown Max:  <input type="number" maxLength="2" value={this.state.cooldownmax} onChange={this.handleChange.bind(this, "cooldownmax")} className="statform-form-number"/>
          Cooldown Min:  <input type="number" maxLength="2" value={this.state.cooldownmin} onChange={this.handleChange.bind(this, "cooldownmin")} className="statform-form-number"/><br/>

          <div className="statform-awakes">Awakenings:
            { options.map((option) => {
                return (<ImageSelect
                  key={`${option}-select`}
                  value={option}
                  action={this.handleAwakening.bind(this, option)}>
                </ImageSelect>);
              })
            }
            </div>
          <p/>
        <input type="submit" value="Submit" className="statform-submit"/>
        </form>
      </div>
    )
  }
}
export default connect(null, mapDispatchToProps)(StatForm);
