// Create a new character from here
import React, { Component } from 'react';

class StatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="statform-formbox">
        Add New Character:
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.name} onChange={this.handleChange} className="statform-form-text"/><br/>
        Rarity: <input type="text" maxLength="2" value={this.state.rarity} onChange={this.handleChange} className="statform-form-number"/>
      Cost: <input type="text" maxLength="3" value={this.state.cost} onChange={this.handleChange} className="statform-form-number"/><br/>
    Element1: <select className="statform-form-element" onChange={this.handleChange}>
            <option value={ this.state.el1 }>Fire</option>
            <option value={ this.state.el1 }>Water</option>
            <option value={ this.state.el1 }>Wood</option>
            <option value={ this.state.el1 }>Light</option>
            <option value={ this.state.el1 }>Dark</option></select>
        Element2:<select className="statform-form-element" onChange={this.handleChange}>
          <option value={ this.state.el1 }></option>
          <option value={ this.state.el1 }>Fire</option>
          <option value={ this.state.el1 }>Water</option>
          <option value={ this.state.el1 }>Wood</option>
          <option value={ this.state.el1 }>Light</option>
          <option value={ this.state.el1 }>Dark</option></select><br/>
          Type1: <select className="statform-form-type" onChange={this.handleChange}>
            <option value={ this.state.type1 }>Attacker</option>
            <option value={ this.state.type1 }>Balanced</option>
            <option value={ this.state.type1 }>Devil</option>
            <option value={ this.state.type1 }>Dragon</option>
            <option value={ this.state.type1 }>Healer</option>
            <option value={ this.state.type1 }>God</option>
            <option value={ this.state.type1 }>Machine</option>
            <option value={ this.state.type1 }>Physical</option>
            <option value={ this.state.type1 }>Awakening Material</option>
            <option value={ this.state.type1 }>Evo Material</option>
            <option value={ this.state.type1 }>Enhanced Material</option>
            <option value={ this.state.type1 }>Redeemable Material</option>
            </select><br/>
          Type2: <select className="statform-form-type" onChange={this.handleChange}>
            <option value={ this.state.type1 }></option>
            <option value={ this.state.type1 }>Attacker</option>
            <option value={ this.state.type1 }>Balanced</option>
            <option value={ this.state.type1 }>Devil</option>
            <option value={ this.state.type1 }>Dragon</option>
            <option value={ this.state.type1 }>Healer</option>
            <option value={ this.state.type1 }>God</option>
            <option value={ this.state.type1 }>Machine</option>
            <option value={ this.state.type1 }>Physical</option>
            <option value={ this.state.type1 }>Awakening Material</option>
            <option value={ this.state.type1 }>Evo Material</option>
            <option value={ this.state.type1 }>Enhanced Material</option>
            <option value={ this.state.type1 }>Redeemable Material</option>
            </select><br/>
          Type3: <select className="statform-form-type" onChange={this.handleChange}>
          <option value={ this.state.type1 }></option>
          <option value={ this.state.type1 }>Attacker</option>
          <option value={ this.state.type1 }>Balanced</option>
          <option value={ this.state.type1 }>Devil</option>
          <option value={ this.state.type1 }>Dragon</option>
          <option value={ this.state.type1 }>Healer</option>
          <option value={ this.state.type1 }>God</option>
          <option value={ this.state.type1 }>Machine</option>
          <option value={ this.state.type1 }>Physical</option>
          <option value={ this.state.type1 }>Awakening Material</option>
          <option value={ this.state.type1 }>Evo Material</option>
          <option value={ this.state.type1 }>Enhanced Material</option>
          <option value={ this.state.type1 }>Redeemable Material</option>
          </select><br/>
        HP: <input type="text" maxLength="5" value={this.state.hp} onChange={this.handleChange} className="statform-form-number"/>
      ATK: <input type="text" maxLength="5" value={this.state.atk} onChange={this.handleChange} className="statform-form-number"/>
    RCV: <input type="text" maxLength="5" value={this.state.rcv} onChange={this.handleChange} className="statform-form-number"/><br/>
      Leader Skill: <input type="text" value={this.state.leader} onChange={this.handleChange} className="statform-form-text"/><br/>
      Description: <input type="text" value={this.state.leaderdesc} onChange={this.handleChange} className="statform-form-text"/><br/>
    Active Skill: <input type="text" value={this.state.active} onChange={this.handleChange} className="statform-form-text"/><br/>
  Description: <input type="text" value={this.state.activedesc} onChange={this.handleChange} className="statform-form-text"/><br/>
Awakenings: <input type="text" value={this.state.awakenings} onChange={this.handleChange} className="statform-form-text"/><br/>
        <input type="submit" value="Submit" className="statform-submit"/>
        </form>
      </div>
    )
  }
}

export default StatForm;
