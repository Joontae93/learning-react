// JSX
const appRoot = document.getElementById('app');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: [],
};

// This is a "Synthetic Event"
const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderApp();
	}
};
const removeOptions = () => {
	app.options = [];
	renderApp();
};

/** Maps App.Options array to a new array with JSX
 * @param {array} options the App Options
 * @returns {array} Array of JSX strings
 */
function renderOptions(options) {
	const output = options.map((option, i) => {
		{
			return (
				<li key={i}>
					Option {i + 1}: {option}
				</li>
			);
		}
	});
	return output;
}
function onMakeDecision() {
	const choice = Math.floor(Math.random() * app.options.length);
	const option = app.options[choice];
	alert(option);
}
function renderApp() {
	const template = (
		<div>
			<header>
				<h1>{app.title}</h1>
				<span>{app.subtitle}</span>
			</header>
			<section>
				<p>
					{app.options.length > 0 ? 'Here are your options:' : 'No Options'}
				</p>
				<ul>{renderOptions(app.options)}</ul>
				<form onSubmit={onFormSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
				<button disabled={app.options.length === 0} onClick={onMakeDecision}>
					What Should I Do?
				</button>
				<button disabled={app.options.length === 0} onClick={removeOptions}>
					Remove All
				</button>
			</section>
		</div>
	);
	ReactDOM.render(template, appRoot);
}
renderApp();

// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };
// const subtractOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// function reset() {
// 	count = 0;
// 	renderCounterApp();
// }

// function renderCounterApp() {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={subtractOne}>-1</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	);
// 	ReactDOM.render(templateTwo, appRoot);
// }
// // renderCounterApp();
