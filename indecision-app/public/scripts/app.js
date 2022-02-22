"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.state = {
      options: props.options
    };
    _this.handleDeleteAllOptions = _this.handleDeleteAllOptions.bind(_assertThisInitialized(_this));
    _this.handleChoice = _this.handleChoice.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter a valid option";
      }

      if (this.state.options.indexOf(option) > -1) {
        return "This option already exists!";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handleDeleteAllOptions",
    value: function handleDeleteAllOptions() {
      alert('Are You sure?!');
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteSingleOption",
    value: function handleDeleteSingleOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handleChoice",
    value: function handleChoice() {
      var choice = Math.floor(Math.random() * this.state.options.length),
          option = this.state.options[choice];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Put your life in the hands of a computer.';
      return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handleChoice: this.handleChoice
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteAllOptions: this.handleDeleteAllOptions,
        handleDeleteSingleOption: this.handleDeleteSingleOption
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};
/** This is a stateless, functional component. These are faster and easier to debug than class-based Components. */

function Header(props) {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
}

Header.defaultProps = {
  title: 'Indecision App'
};

function Action(props) {
  return /*#__PURE__*/React.createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.handleChoice
  }, "What should I do?");
}

function Options(props) {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("ul", null, props.options.map(function (option, i) {
    return /*#__PURE__*/React.createElement(Option, {
      optionText: option,
      key: i,
      handleDeleteSingleOption: props.handleDeleteSingleOption
    });
  })), /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteAllOptions
  }, "Remove All"));
}

function Option(props) {
  return /*#__PURE__*/React.createElement("li", null, "Option: ", props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteSingleOption(props.optionText);
    }
  }, "Remove Option"));
}

var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  var _super2 = _createSuper(AddOption);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
