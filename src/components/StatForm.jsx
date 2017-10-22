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
    const options = ["aw1","aw2","aw3","aw4","aw5","aw6","aw7","aw8","aw9"];
    let awakenings = [];
    return (
      <div className="statform-formbox">
        Add New Character:
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} className="statform-form-text"/><br/>
          Rarity: <input type="text" maxLength="2" value={this.state.rarity} onChange={this.handleChange.bind(this, "rarity")} className="statform-form-number"/>
          Cost: <input type="text" maxLength="3" value={this.state.cost} onChange={this.handleChange.bind(this, "cost")} className="statform-form-number"/><br/>
          Element1: <select className="statform-form-element" onChange={this.handleChange.bind(this, "el1")}>
            <option value={ this.state.el1 } data-image="/images/1_fire.png"></option>
            <option value={ this.state.el1 } data-image="/images/2_water.png"></option>
            <option value={ this.state.el1 } data-image="/images/3_wood.png"></option>
            <option value={ this.state.el1 } data-image="/images/4_light.png"></option>
            <option value={ this.state.el1 } data-image="/images/5_dark.png"></option></select>
          Element2:<select className="statform-form-element" onChange={this.handleChange.bind(this, "el2")}>
            <option value={ this.state.el2 }></option>
            <option value={ this.state.el2 } data-image="/images/1_fire.png"></option>
            <option value={ this.state.el2 } data-image="/images/2_water.png"></option>
            <option value={ this.state.el2 } data-image="/images/3_wood.png"></option>
            <option value={ this.state.el2 } data-image="/images/4_light.png"></option>
            <option value={ this.state.el2 } data-image="/images/5_dark.png"></option></select>
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


          Awakenings:
            { options.map((option) => {
                awakenings = [];
                let select = [];
                awakenings.push(<option key={`${option}-0`} value={ `this.state.${option}` } ></option>);
                for (let i = 1; i < 49; i++) {
                  awakenings.push(<option key={`${option}-${i}`} value={ `this.state.${option}` } data-image={`/images/awakenings/${i}.png`}></option>);
                }
                select.push(<select key={`${option}-select`} className="statform-form-element" onChange={this.handleChange.bind(this, `${option}`)}>{awakenings}</select>);
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

// <option value={ this.state.aw1 } ></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/1.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/2.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/3.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/4.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/5.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/6.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/7.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/8.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/9.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/10.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/11.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/12.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/13.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/14.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/15.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/16.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/17.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/18.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/19.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/20.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/21.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/22.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/23.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/24.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/25.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/26.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/27.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/28.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/29.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/30.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/31.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/32.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/33.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/34.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/35.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/36.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/37.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/38.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/39.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/40.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/41.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/42.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/43.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/44.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/45.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/46.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/47.png"></option>
// <option value={ this.state.aw1 } data-image="/images/awakenings/48.png"></option>

export default StatForm;
