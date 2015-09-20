"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    _get(Object.getPrototypeOf(Counter.prototype), "constructor", this).call(this, props);
    this.state = { count: props.initialCount };
  }

  _createClass(Counter, [{
    key: "tick",
    value: function tick() {
      this.setState({ count: this.state.count + 1 });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", { onClick: this.tick.bind(this), className: "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" }, React.createElement("i", { className: "material-icons" }, "add")), "Clicks: ", this.state.count);
    }
  }]);

  return Counter;
})(React.Component);

Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transition = React.addons.CSSTransitionGroup;

var TodoListItems = (function (_React$Component) {
  _inherits(TodoListItems, _React$Component);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    _get(Object.getPrototypeOf(TodoListItems.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(TodoListItems, [{
    key: "item",
    value: function item(text, index) {
      return React.createElement("div", { key: index, className: "mdl-grid list-item mdl-color--white" }, React.createElement("div", { className: "mdl-cell mdl-cell--12-col" }, text));
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.items.map(this.item);

      return React.createElement(Transition, { transitionName: "itemslist" }, items);
    }
  }]);

  return TodoListItems;
})(React.Component);

var TodoApp = (function (_React$Component2) {
  _inherits(TodoApp, _React$Component2);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    _get(Object.getPrototypeOf(TodoApp.prototype), "constructor", this).call(this);
    this.state = { items: ['Item #1'], text: '' };
  }

  _createClass(TodoApp, [{
    key: "onChange",
    value: function onChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text) return;
      var nextItems = this.state.items.concat([this.state.text]);
      this.setState({ items: nextItems, text: '' });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "container" }, React.createElement("h3", { className: "mdl-color--white" }, "TODO"), React.createElement(TodoListItems, { items: this.state.items }), React.createElement("form", { onSubmit: this.handleSubmit.bind(this), className: "mdl-grid" }, React.createElement("div", { className: "mdl-textfield mdl-js-textfield mdl-cell--12-col" }, React.createElement("input", { onChange: this.onChange.bind(this),
        value: this.state.text,
        className: "mdl-textfield__input", id: "sample1" }), React.createElement("label", { className: "mdl-textfield__label", "for": "sample1" }, "Text..."))));
    }
  }]);

  return TodoApp;
})(React.Component);