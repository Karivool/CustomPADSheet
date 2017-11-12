// Create a new character from here
import React, { Component } from 'react';
import Select from 'react-select';
import CharService from './CharService';
import ImageSelect from './ImageSelect';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { addChar } from '../actions/char_actions.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  addChar
}, dispatch);

class StatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rarity: "",
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
      leader: "",
      leaderdesc: "",
      active: "",
      activedesc: "",
      aw1: "",
      aw2: "",
      aw3: "",
      aw4: "",
      aw5: "",
      aw6: "",
      aw7: "",
      aw8: "",
      aw9: "",
    };
    this.addCharService = new CharService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      atk = this.state.atk / 5
    }
    if (this.state.rcv === "") {
      rcv = 0;
    } else {
      rcv = this.state.rcv / 3
    }
    this.setState({
      weighted: (hp + atk + rcv).toFixed(2),
    });
  }

  handleChange(property, event) {
    this.setState({
      [property]: event.target.value,
    });
    if (property === "hp" || property === "atk" || property === "rcv") {
      this.calcWeight();
    }
  }

  handleAwakening(property, value) {
    this.setState({
      [property]: value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    // this.props.addChar(this.state);
    this.addCharService.sendData(
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
          Rarity: <input type="number" maxLength="2" value={this.state.rarity} onChange={this.handleChange.bind(this, "rarity")} className="statform-form-number"/>
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
          Leader Skill: <input type="text" value={this.state.leader} onChange={this.handleChange.bind(this, "leader")} className="statform-form-text"/><br/>
          Description:  <input type="text" value={this.state.leaderdesc} onChange={this.handleChange.bind(this, "leaderdesc")} className="statform-form-text"/><br/>
          Active Skill: <input type="text" value={this.state.active} onChange={this.handleChange.bind(this, "active")} className="statform-form-text"/><br/>
          Description:  <input type="text" value={this.state.activedesc} onChange={this.handleChange.bind(this, "activedesc")} className="statform-form-text"/><br/>
          Awakenings:
            { options.map((option) => {
                return (<ImageSelect
                  key={`${option}-select`}
                  value={option}
                  action={this.handleAwakening.bind(this, option)}>
                </ImageSelect>);
              })
            }
          <p/>
        <input type="submit" value="Submit" className="statform-submit"/>
        </form>
      </div>
    )
  }
}
export default connect(null, mapDispatchToProps)(StatForm);

// export default reduxForm({
//   form: 'character',
//   fields: ['name', 'rarity', 'cost', 'el1', 'el2', 'type1', 'type2', 'type3',
//            'hp', 'atk', 'rcv', 'leader', 'leaderdesc', 'active', 'activedesc',],
// })(StatForm);

// name: this.state.name,
// rarity: this.state.rarity,
// cost: this.state.cost,
// el1: this.state.el1,
// el2: this.state.el2,
// type1: this.state.type1,
// type2: this.state.type2,
// type3: this.state.type3,
// hp: this.state.hp,
// atk: this.state.atk,
// rcv: this.state.rcv,
// leader: this.state.leader,
// leaderdesc: this.state.leaderdesc,
// active: this.state.active,
// activedesc: this.state.activedesc,
// aw1: this.state.aw1,
// aw2: this.state.aw2,
// aw3: this.state.aw3,
// aw4: this.state.aw4,
// aw5: this.state.aw5,
// aw6: this.state.aw6,
// aw7: this.state.aw7,
// aw8: this.state.aw8,
// aw9: this.state.aw9
