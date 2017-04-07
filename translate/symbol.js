'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chai = require('chai');

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('test symbol', function () {
	it('symbol', function () {
		var mySymbol = Symbol('name');
		var xiaoming = {};
		xiaoming[mySymbol] = 'xiaoming';
		(0, _chai.expect)(xiaoming[mySymbol]).to.be.equal('xiaoming');
		(0, _chai.expect)(xiaoming.mySymbol).to.be.equal(undefined);
		(0, _chai.expect)(xiaoming['mySymbol']).to.be.equal(undefined);
	});
	it('get Symbol property', function () {
		var _xiaoming;

		var name = Symbol('name');
		var age = Symbol('age');
		var xiaoming = (_xiaoming = {
			sex: 'male'
		}, _defineProperty(_xiaoming, name, 'xiaoming'), _defineProperty(_xiaoming, age, 20), _xiaoming);
		var ownProperty = Object.getOwnPropertyNames(xiaoming);
		(0, _chai.expect)(ownProperty).to.deep.equal(['sex']);
		var symbolProperty = Object.getOwnPropertySymbols(xiaoming);
		(0, _chai.expect)(symbolProperty).to.deep.equal([name, age]);
	});
	it('test for method', function () {
		var firstSymbol = Symbol.for('xiaoming');
		var secondSymbol = Symbol.for('xiaoming');
		(0, _chai.expect)(firstSymbol).to.be.equal(secondSymbol);
	});
	it('test keyfor', function () {
		var xiaoming = Symbol.for('xiaoming');
		(0, _chai.expect)(Symbol.keyFor(xiaoming)).to.be.equal('xiaoming');
	});
	it('test Symbol.hasInstance', function () {
		var Man = function () {
			function Man() {
				_classCallCheck(this, Man);
			}

			_createClass(Man, [{
				key: Symbol.hasInstance,
				value: function value(instance) {
					return instance instanceof Object;
				}
			}]);

			return Man;
		}();

		(0, _chai.expect)({} instanceof new Man()).to.be.equal(true);
	});
	it('test Symbol.isConcatSpreadable', function () {
		var testArray = [1, 2];
		var waitToConcat = [3, 4];
		waitToConcat[Symbol.isConcatSpreadable] = false;
		var concatArray = testArray.concat(waitToConcat);
		(0, _chai.expect)(concatArray).to.deep.equal([1, 2, [3, 4]]);
	});
});