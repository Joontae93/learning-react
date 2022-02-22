class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { options: props.options };
		this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
		this.handleChoice = this.handleChoice.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
	}
	handleAddOption(option) {
		if (!option) {
			return `Enter a valid option`;
		}
		if (this.state.options.indexOf(option) > -1) {
			return `This option already exists!`;
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
	}
	handleDeleteAllOptions() {
		alert('Are You sure?!');
		this.setState(() => ({ options: [] }));
	}
	handleDeleteSingleOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option),
		}));
	}
	handleChoice() {
		const choice = Math.floor(Math.random() * this.state.options.length),
			option = this.state.options[choice];
		alert(option);
	}
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
			</main>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [],
};

/** This is a stateless, functional component. These are faster and easier to debug than class-based Components. */
function Header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</header>
	);
}

Header.defaultProps = {
	title: 'Indecision App',
};

function Action(props) {
	return (
		<button disabled={!props.hasOptions} onClick={props.handleChoice}>
			What should I do?
		</button>
	);
}

function Options(props) {
	return (
		<section>
			<ul>
				{props.options.map((option, i) => (
					<Option
						optionText={option}
						key={i}
						handleDeleteSingleOption={props.handleDeleteSingleOption}
					/>
				))}
			</ul>
			<button onClick={props.handleDeleteAllOptions}>Remove All</button>
		</section>
	);
}

function Option(props) {
	return (
		<li>
			Option: {props.optionText}
			<button
				onClick={(e) => {
					props.handleDeleteSingleOption(props.optionText);
				}}
			>
				Remove Option
			</button>
		</li>
	);
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = { error: undefined };
	}
	onFormSubmit(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));
		e.target.elements.option.value = '';
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
