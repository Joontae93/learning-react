"use strict";

// JSX
var userName = 'KJ';
var age = 28;
var location = 'Dallas, TX';
var template = /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, userName), /*#__PURE__*/React.createElement("div", {
  "class": "meta"
}, /*#__PURE__*/React.createElement("span", null, "Age: ", age), /*#__PURE__*/React.createElement("span", null, "Location: ", location)));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
