'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Index = (function () {
  function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  _createClass(Index, [{
    key: 'submit',
    value: function submit() {
      alert('Welcome, ' + this.fullName + '!');
    }
  }, {
    key: 'fullName',
    get: function get() {
      return this.firstName + ' ' + this.lastName;
    }
  }]);

  return Index;
})();