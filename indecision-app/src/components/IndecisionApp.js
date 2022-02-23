import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
	state = { options: [], selectedOption: undefined };

	/** BEGIN HANDLERS */

	handleAddOption = (option) => {
		if (!option) {
			return `Enter a valid option`;
		}
		if (this.state.options.indexOf(option) > -1) {
			return `This option already exists!`;
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
	};
	handleDeleteAllOptions = () => {
		this.setState(() => ({ options: [] }));
	};
	handleDeleteSingleOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option),
		}));
	};
	handleChoice = () => {
		const choice = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[choice];
		this.setState(() => ({ selectedOption: option }));
	};
	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};

	////////////////////////
	// LIFECYCLE METHODS
	/** There are 3 stages in a component's lifecycle
	 * 1.) Did Mount
	 * 2.) Did Update
	 * 3.) Will Unmount
	 * * These might be deprecrated?
	 */

	// Step 1
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) this.setState(() => ({ options }));
		} catch (err) {
			console.error(err);
		}
	}

	// Step 2
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('saving data...');
		}
	}

	// Step 3
	componentWillUnmount() {
		console.log('Component will unmount.');
	}

	////////////////////
	// RENDER THE APP
	render() {
		const subtitle = 'Put your life in the hands of a computer.';
		return (
			<main>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handleChoice={this.handleChoice}
				/>
				<Options
					options={this.state.options}
					handleDeleteAllOptions={this.handleDeleteAllOptions}
					handleDeleteSingleOption={this.handleDeleteSingleOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
				<OptionModal
					selectedOption={this.state.selectedOption}
					clearSelectedOption={this.handleClearSelectedOption}
				/>
			</main>
		);
	}
}
export default IndecisionApp;
