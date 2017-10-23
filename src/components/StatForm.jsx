// Create a new character from here
import React, { Component } from 'react';

class StatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
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
    });
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
    debugger
    this.setState({
      [property]: event.target.value,
    });
    if (property === "hp" || property === "atk" || property === "rcv") {
      this.calcWeight();
    }
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    const options = ["aw1","aw2","aw3","aw4","aw5","aw6","aw7","aw8","aw9"];
    let awakenings = [];
    let awakevalues = ["", "hp", "atk", "rcv", "fire-res", "water-res", "wood-res",
    "light-res", "dark-res", "heal", "bind-res", "blind", "jammer", "poison",
    "fire-p", "water-p", "wood-p", "light-p", "dark-p", "time", "bind-rec",
    "skill", "fire-r", "water-r", "wood-r", "light-r", "dark-r", "tpa",
    "skill-res", "heart-p", "multi", "dragon-k", "god-k", "devil-k",
    "machine-k", "attacker-k", "physical-k", "healer-k", "balanced-k",
    "awoken-k", "enhance-k", "redeem-k", "evo-k", "7combo", "guardbreak",
    "fua", "hp-team", "rcv-team", "9orb"]
    return (
      <div className="statform-formbox">
        Add New Character:
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} className="statform-form-text"/><br/>
          Rarity: <input type="number" maxLength="2" value={this.state.rarity} onChange={this.handleChange.bind(this, "rarity")} className="statform-form-number"/>
          Cost: <input type="number" maxLength="3" value={this.state.cost} onChange={this.handleChange.bind(this, "cost")} className="statform-form-number"/><br/>
          <label>Element1: <select value={ this.state.el1 }className="statform-form-element" onChange={this.handleChange.bind(this, "el1")}>
            <option value="fire" data-image="/images/1_fire.png"></option>
            <option value="water" data-image="/images/2_water.png"></option>
            <option value="wood" data-image="/images/3_wood.png"></option>
            <option value="light" data-image="/images/4_light.png"></option>
            <option value="dark" data-image="/images/5_dark.png"></option></select></label>
          Element2:<select value={ this.state.el2 } className="statform-form-element" onChange={this.handleChange.bind(this, "el2")}>
            <option value=""></option>
            <option value="fire" data-image="/images/1_fire.png"></option>
            <option value="water" data-image="/images/2_water.png"></option>
            <option value="wood" data-image="/images/3_wood.png"></option>
            <option value="light" data-image="/images/4_light.png"></option>
            <option value="dark" data-image="/images/5_dark.png"></option></select><br/>
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
            <option value=""></option>
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
            <option value=""></option>
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
                awakenings = [];
                let select = [];
                awakenings.push(<option key={`${option}-0`} value={ `this.state.${option}` } ></option>);
                for (let i = 1; i < 49; i++) {
                  awakenings.push(<option key={`${option}-${i}`} value={ `this.state.${option}` } data-image={`/images/awakenings/${i}.png`}></option>);
                }
                select.push(<select key={`${option}-select`} value={ `this.state.${option}` } className="statform-form-element" onChange={this.handleChange.bind(this, `${option}`)}>{awakenings}</select>);
                return (select);
              })
            }

          <p/>
        <input type="submit" value="Submit" className="statform-submit"/>
        </form>
      </div>
    )
  }
}
export default StatForm;
