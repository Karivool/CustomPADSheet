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

  handleChange(property, event) {
    this.setState({
      [property]: event.target.value,
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="statform-formbox">
        Add New Character:
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} className="statform-form-text"/><br/>
          Rarity: <input type="text" maxLength="2" value={this.state.rarity} onChange={this.handleChange.bind(this, "rarity")} className="statform-form-number"/>
          Cost: <input type="text" maxLength="3" value={this.state.cost} onChange={this.handleChange.bind(this, "cost")} className="statform-form-number"/><br/>
          Element1: <select className="statform-form-element" onChange={this.handleChange.bind(this, "el1")}>
            <option value={ this.state.el1 } data-image="/images/1_fire.png">Fire</option>
            <option value={ this.state.el1 } data-image="/images/2_water.png">Water</option>
            <option value={ this.state.el1 } data-image="/images/3_wood.png">Wood</option>
            <option value={ this.state.el1 } data-image="/images/4_light.png">Light</option>
            <option value={ this.state.el1 } data-image="/images/5_dark.png">Dark</option></select>
          Element2:<select className="statform-form-element" onChange={this.handleChange.bind(this, "el2")}>
            <option value={ this.state.el2 }></option>
            <option value={ this.state.el2 } data-image="/images/1_fire.png">Fire</option>
            <option value={ this.state.el2 } data-image="/images/2_water.png">Water</option>
            <option value={ this.state.el2 } data-image="/images/3_wood.png">Wood</option>
            <option value={ this.state.el2 } data-image="/images/4_light.png">Light</option>
            <option value={ this.state.el2 } data-image="/images/5_dark.png">Dark</option></select>
          Type1: <select className="statform-form-type" onChange={this.handleChange.bind(this, "type1")}>
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
          Type2: <select className="statform-form-type" onChange={this.handleChange.bind(this, "type2")}>
            <option value={ this.state.type2 }></option>
            <option value={ this.state.type2 }>Attacker</option>
            <option value={ this.state.type2 }>Balanced</option>
            <option value={ this.state.type2 }>Devil</option>
            <option value={ this.state.type2 }>Dragon</option>
            <option value={ this.state.type2 }>Healer</option>
            <option value={ this.state.type2 }>God</option>
            <option value={ this.state.type2 }>Machine</option>
            <option value={ this.state.type2 }>Physical</option>
            <option value={ this.state.type2 }>Awakening Material</option>
            <option value={ this.state.type2 }>Evo Material</option>
            <option value={ this.state.type2 }>Enhanced Material</option>
            <option value={ this.state.type2 }>Redeemable Material</option>
            </select><br/>
          Type3: <select className="statform-form-type" onChange={this.handleChange.bind(this, "type3")}>
            <option value={ this.state.type3 }></option>
            <option value={ this.state.type3 }>Attacker</option>
            <option value={ this.state.type3 }>Balanced</option>
            <option value={ this.state.type3 }>Devil</option>
            <option value={ this.state.type3 }>Dragon</option>
            <option value={ this.state.type3 }>Healer</option>
            <option value={ this.state.type3 }>God</option>
            <option value={ this.state.type3 }>Machine</option>
            <option value={ this.state.type3 }>Physical</option>
            <option value={ this.state.type3 }>Awakening Material</option>
            <option value={ this.state.type3 }>Evo Material</option>
            <option value={ this.state.type3 }>Enhanced Material</option>
            <option value={ this.state.type3 }>Redeemable Material</option>
            </select><br/>
            HP: <input type="text" maxLength="5" value={this.state.hp} onChange={this.handleChange.bind(this, "hp")} className="statform-form-number"/>
            ATK: <input type="text" maxLength="5" value={this.state.atk} onChange={this.handleChange.bind(this, "atk")} className="statform-form-number"/>
            RCV: <input type="text" maxLength="5" value={this.state.rcv} onChange={this.handleChange.bind(this, "rcv")} className="statform-form-number"/><br/>
            Leader Skill: <input type="text" value={this.state.leader} onChange={this.handleChange.bind(this, "leader")} className="statform-form-text"/><br/>
            Description: <input type="text" value={this.state.leaderdesc} onChange={this.handleChange.bind(this, "leaderdesc")} className="statform-form-text"/><br/>
            Active Skill: <input type="text" value={this.state.active} onChange={this.handleChange.bind(this, "active")} className="statform-form-text"/><br/>
            Description: <input type="text" value={this.state.activedesc} onChange={this.handleChange.bind(this, "activedesc")} className="statform-form-text"/><br/>
            Awakening1: <select className="statform-form-element" onChange={this.handleChange.bind(this, "aw1")}>
              <option value={ this.state.aw1 } data-image="/images/awakenings/3_hp.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/4_atk.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/5_rcv.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/6_fireres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/7_waterres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/8_woodres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/9_lightres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/10_darkres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/11_autoheal.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/12_bindres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/13_blind.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/14_jammer.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/15_poison.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/16_fireplus.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/17_waterplus.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/18_woodplus.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/19_lightplus.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/20_darkplus.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/21_timeextend.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/22_bindrec.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/23_skillboost.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/24_firerow.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/25_waterrow.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/26_woodrow.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/27_lightrow.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/28_darkrow.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/29_tpa.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/30_skillres.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/31_heartplus.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/32_multiboost.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/33_dragkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/34_godkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/35_devilkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/36_machkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/37_atkkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/38_physkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/39_healkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/40_balkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/41_tamakill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/42_matkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/43_redkill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/44_evokill.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/45_7combo.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/46_guardbreak.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/47_fua.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/48_hpteam.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/49_rcvteam.png"></option>
              <option value={ this.state.aw1 } data-image="/images/awakenings/50_9orb.png"></option>
              </select>

        <input type="submit" value="Submit" className="statform-submit"/>
        </form>
      </div>
    )
  }
}

export default StatForm;
