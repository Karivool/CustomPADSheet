import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const AWAKENINGS = [
  { value: '', label: 'none', image: '' },
	{ value: 'skill', label: <img className='dropdown-img' src='/images/awakenings/21.png' alt='SKILL+'></img>},
	{ value: 'skill-res', label: <img className='dropdown-img' src='/images/awakenings/28.png' alt='SKILLRES'></img>},
	{ value: 'time', label: <img className='dropdown-img' src='/images/awakenings/19.png' alt='TIME+'></img>},
	{ value: 'tpa', label: <img className='dropdown-img' src='/images/awakenings/27.png' alt='TPA'></img>},
	{ value: 'bind-res', label: <img className='dropdown-img' src='/images/awakenings/10.png' alt='BINDRES'></img>},
	{ value: 'bind-rec', label: <img className='dropdown-img' src='/images/awakenings/20.png' alt='BINDREC'></img>},
  { value: 'heal', label: <img className='dropdown-img' src='/images/awakenings/9.png' alt='HEAL'></img>},
  { value: 'blind', label: <img className='dropdown-img' src='/images/awakenings/11.png' alt='BLIND'></img>},
  { value: 'jammer', label: <img className='dropdown-img' src='/images/awakenings/12.png' alt='JAMMER'></img>},
  { value: 'poison', label: <img className='dropdown-img' src='/images/awakenings/13.png' alt='POISON'></img>},
	{ value: 'fire-p', label: <img className='dropdown-img' src='/images/awakenings/14.png' alt='FIRE+'></img>},
  { value: 'water-p', label: <img className='dropdown-img' src='/images/awakenings/15.png' alt='WATER+'></img>},
  { value: 'wood-p', label: <img className='dropdown-img' src='/images/awakenings/16.png' alt='WOOD+'></img>},
  { value: 'light-p', label: <img className='dropdown-img' src='/images/awakenings/17.png' alt='LIGHT+'></img>},
  { value: 'dark-p', label: <img className='dropdown-img' src='/images/awakenings/18.png' alt='DARK+'></img>},
	{ value: 'heart-p', label: <img className='dropdown-img' src='/images/awakenings/29.png' alt='HEART+'></img>},
	{ value: 'fire-r', label: <img className='dropdown-img' src='/images/awakenings/22.png' alt='FIREROW'></img>},
  { value: 'water-r', label: <img className='dropdown-img' src='/images/awakenings/23.png' alt='WATERROW'></img>},
  { value: 'wood-r', label: <img className='dropdown-img' src='/images/awakenings/24.png' alt='WOODROW'></img>},
  { value: 'light-r', label: <img className='dropdown-img' src='/images/awakenings/25.png' alt='LIGHTROW'></img>},
  { value: 'dark-r', label: <img className='dropdown-img' src='/images/awakenings/26.png' alt='DARKROW'></img>},
	{ value: 'fire-res', label: <img className='dropdown-img' src='/images/awakenings/4.png' alt='FIRERES'></img>},
	{ value: 'water-res', label: <img className='dropdown-img' src='/images/awakenings/5.png' alt='WATERRES'></img>},
	{ value: 'wood-res', label: <img className='dropdown-img' src='/images/awakenings/6.png' alt='WOODRES'></img>},
	{ value: 'light-res', label: <img className='dropdown-img' src='/images/awakenings/7.png' alt='LIGHTRES'></img>},
	{ value: 'dark-res', label: <img className='dropdown-img' src='/images/awakenings/8.png' alt='DARKRES'></img>},
	{ value: 'multi', label: <img className='dropdown-img' src='/images/awakenings/30.png' alt='MULTI+'></img>},
	{ value: '7combo', label: <img className='dropdown-img' src='/images/awakenings/43.png' alt='7COMBO'></img>},
	{ value: 'guardbreak', label: <img className='dropdown-img' src='/images/awakenings/44.png' alt='GUARDBREAK'></img>},
	{ value: 'fua', label: <img className='dropdown-img' src='/images/awakenings/45.png' alt='FUA'></img>},
	{ value: 'hp', label: <img className='dropdown-img' src='/images/awakenings/1.png' alt='HP'></img>},
	{ value: 'atk', label: <img className='dropdown-img' src='/images/awakenings/2.png' alt='ATK'></img>},
	{ value: 'rcv', label: <img className='dropdown-img' src='/images/awakenings/3.png' alt='RCV'></img>},
	{ value: 'hp-team', label: <img className='dropdown-img' src='/images/awakenings/46.png' alt='HPTEAM'></img>},
	{ value: 'rcv-team', label: <img className='dropdown-img' src='/images/awakenings/47.png' alt='RCVTEAM'></img>},
	{ value: '9orb', label: <img className='dropdown-img' src='/images/awakenings/48.png' alt='VOIDSHIELD'></img>},
  { value: 'dragon-k', label: <img className='dropdown-img' src='/images/awakenings/31.png' alt='DRAGONKILL'></img>},
  { value: 'god-k', label: <img className='dropdown-img' src='/images/awakenings/32.png' alt='GODKILL'></img>},
  { value: 'devil-k', label: <img className='dropdown-img' src='/images/awakenings/33.png' alt='DEVILKILL'></img>},
  { value: 'machine-k', label: <img className='dropdown-img' src='/images/awakenings/34.png' alt='MACHINEKILL'></img>},
  { value: 'attacker-k', label: <img className='dropdown-img' src='/images/awakenings/35.png' alt='ATTACKERKILL'></img>},
  { value: 'physical-k', label: <img className='dropdown-img' src='/images/awakenings/36.png' alt='PHYSICALKILL'></img>},
  { value: 'healer-k', label: <img className='dropdown-img' src='/images/awakenings/37.png' alt='HEALERKILL'></img>},
  { value: 'balanced-k', label: <img className='dropdown-img' src='/images/awakenings/38.png' alt='BALANCEDKILL'></img>},
  { value: 'awoken-k', label: <img className='dropdown-img' src='/images/awakenings/39.png' alt='AWOKENKILL'></img>},
  { value: 'enhance-k', label: <img className='dropdown-img' src='/images/awakenings/40.png' alt='ENHANCEKILL'></img>},
  { value: 'redeem-k', label: <img className='dropdown-img' src='/images/awakenings/41.png' alt='REDEEMKILL'></img>},
  { value: 'evo-k', label: <img className='dropdown-img' src='/images/awakenings/42.png' alt='EVOKILL'></img>},
];

var ImageSelect = createClass({
	displayName: 'ImageSelect',
	propTypes: {
		label: PropTypes.string,
		searchable: PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: '',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			disabled: false,
			searchable: this.props.searchable,
			selectValue: '',
			clearable: false,
			rtl: false,
		};
	},
	updateValue (newValue) {
		this.setState({
			selectValue: newValue,
		});
		this.props.action(newValue);
	},
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},
	render () {
		var options = AWAKENINGS;
		return (
			<div className="section">
				<Select
					id="state-select"
					ref="stateSelect"
					autoFocus
					options={options}
					simpleValue
					clearable={this.state.clearable}
					name="selected-state"
					disabled={this.state.disabled}
					value={this.state.selectValue}
					onChange={this.updateValue}
					rtl={this.state.rtl}
					searchable={this.state.searchable}
				/>
			</div>
		);
	}
});

export default ImageSelect;
