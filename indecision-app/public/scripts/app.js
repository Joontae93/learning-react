"use strict";

// JSX
var appRoot = document.getElementById('app');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}; // This is a "Synthetic Event"

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeOptions = function removeOptions() {
  app.options = [];
  renderApp();
};
/** Maps App.Options array to a new array with JSX
 * @param {array} options the App Options
 * @returns {array} Array of JSX strings
 */


function renderOptions(options) {
  var output = options.map(function (option, i) {
    {
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, "Option ", i + 1, ": ", option);
    }
  });
  return output;
}

function onMakeDecision() {
  var choice = Math.floor(Math.random() * app.options.length);
  var option = app.options[choice];
  alert(option);
}

function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("span", null, app.subtitle)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options:' : 'No Options'), /*#__PURE__*/React.createElement("ul", null, renderOptions(app.options)), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What Should I Do?"), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: removeOptions
  }, "Remove All")));
  ReactDOM.render(template, appRoot);
}

renderApp(); // let count = 0;
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
