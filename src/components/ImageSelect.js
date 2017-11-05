import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const AWAKENINGS = require('../constants/awakenings');

const ImageSelectHandle = createClass({
	propTypes: {
		children: PropTypes.node,
		className: PropTypes.string,
		isDisabled: PropTypes.bool,
		isFocused: PropTypes.bool,
		isSelected: PropTypes.bool,
		onFocus: PropTypes.func,
		onSelect: PropTypes.func,
		option: PropTypes.object.isRequired,
	},
	handleMouseDown (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},
	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event);
	},
	handleMouseMove (event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
	},
	render () {
		let imageStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
		return (
			<div className={this.props.className}
				onMouseDown={this.handleMouseDown}
				onMouseEnter={this.handleMouseEnter}
				onMouseMove={this.handleMouseMove}
				title={this.props.option.title}>
				{this.props.children}
			</div>
		);
	}
});

const SelectValue = createClass({
	propTypes: {
		children: PropTypes.node,
		placeholder: PropTypes.string,
		value: PropTypes.object
	},
	render () {
		var imageStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
		return (
			<div className="Select-value" title={this.props.value.title}>
				<span className="Select-value-label">
				</span>
			</div>
		);
	}
});

const ImageSelect = createClass({
	propTypes: {
		hint: PropTypes.string,
		label: PropTypes.string,
	},
	getInitialState () {
		return {};
	},
	setValue (value) {
		this.setState({ value });
	},
	render () {
		var placeholder = <span>&#9786; Select User</span>;

		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label} <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/CustomComponents.js">(Source)</a></h3>
				<Select
					arrowRenderer={arrowRenderer}
					onChange={this.setValue}
					optionComponent={ImageSelectHandle}
					options={AWAKENINGS}
					placeholder={placeholder}
					value={this.state.value}
					valueComponent={SelectValue}
					/>
				<div className="hint">
					Select option
				</div>
			</div>
		);
	}
});

function arrowRenderer () {
	return (
		<span>+</span>
	);
}

module.exports = ImageSelect;
