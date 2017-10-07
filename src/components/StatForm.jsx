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
        Rarity: <input type="text" value={this.state.rarity} onChange={this.handleChange} className="statform-form-number"/>
      Cost: <input type="text" value={this.state.cost} onChange={this.handleChange} className="statform-form-number"/><br/>
          Element1: <input type="text" value={this.state.el1} onChange={this.handleChange} className="statform-form-number"/>
        Element2: <input type="text" value={this.state.el2} onChange={this.handleChange} className="statform-form-number"/><br/>
          Type1: <input type="text" value={this.state.type1} onChange={this.handleChange} className="statform-form-number"/>
          Type2: <input type="text" value={this.state.type2} onChange={this.handleChange} className="statform-form-number"/>
        Type3: <input type="text" value={this.state.type3} onChange={this.handleChange} className="statform-form-number"/><br/>
          HP: <input type="text" value={this.state.hp} onChange={this.handleChange} className="statform-form-number"/>
          ATK: <input type="text" value={this.state.atk} onChange={this.handleChange} className="statform-form-number"/>
        RCV: <input type="text" value={this.state.rcv} onChange={this.handleChange} className="statform-form-number"/><br/>
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
