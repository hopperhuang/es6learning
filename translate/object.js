'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chai = require('chai');

require('babel-polyfill');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('object extension', function () {
	it('simple expression', function () {
		function information(name, age) {
			return { name: name, age: age };
		}
		var xiaoming = information('xiaoming', 20);
		(0, _chai.expect)(xiaoming).to.deep.equal({ name: 'xiaoming', age: 20 });
	});
	it('test property', function () {
		var name = "name";
		var xiaoming = _defineProperty({}, name, 'xiaoming');
		(0, _chai.expect)(xiaoming.name).to.be.equal('xiaoming');
		var na = 'na';
		var me = 'me';
		var xiaohong = _defineProperty({}, na + me, 'xiaohong');
		(0, _chai.expect)(xiaohong.name).to.be.equal('xiaohong');
	});
	it('test object method name', function () {
		var xiaoming = {
			sayName: function sayName() {
				return 'I am xiaoming';
			}
		};
		(0, _chai.expect)(xiaoming.sayName.name).to.be.equal('sayName');
	});
	it('test object.is', function () {
		(0, _chai.expect)(Object.is('xiaoming', 'xiaoming')).to.be.equal(true);
		(0, _chai.expect)(Object.is(NaN, NaN)).to.be.equal(true);
	});
	it('test Object.assign', function () {
		var xiaoming = { name: 'xiaoming' };
		var age = { age: 20 };
		var height = { height: 170 };
		Object.assign(xiaoming, age, height);
		(0, _chai.expect)(xiaoming.age).to.be.equal(20);
	});
	it('Object.assign in constructor', function () {
		var Man = function Man(name, age) {
			_classCallCheck(this, Man);

			Object.assign(this, { name: name, age: age });
		};

		var xiaoming = new Man('xiaoming', 20);
		(0, _chai.expect)(xiaoming.name).to.be.equal('xiaoming');
	});
	it('clone an object', function () {
		function clone(wantToClone) {
			return Object.assign({}, wantToClone);
		}
		var copy = clone({ name: 'xiaoming' });
		(0, _chai.expect)(copy).to.deep.equal({ name: 'xiaoming' });
	});
	it('when two Object have same property,the later one replace the before one', function () {
		var xiaoming = { name: 'xiaoming' };
		var xiaohong = { name: 'xiaohong' };
		Object.assign(xiaoming, xiaohong);
		(0, _chai.expect)(xiaoming.name).to.be.equal('xiaohong');
	});
	it('Object.keys', function () {
		var xiaoming = { 'name': 'xiaoming', age: 20 };
		var keys = Object.keys(xiaoming);
		(0, _chai.expect)(keys).to.deep.equal(['name', 'age']);
	});
	it('Object.values', function () {
		var xiaoming = { name: 'xiaoming', age: 20 };
		var values = Object.values(xiaoming);
		(0, _chai.expect)(values).to.deep.equal(['xiaoming', 20]);
	});
	it('Object.entries', function () {
		var xiaoming = { name: 'xiaoming' };
		var entries = Object.entries(xiaoming);
		(0, _chai.expect)(entries).to.deep.equal([['name', 'xiaoming']]);
	});
	it('destructuring in object', function () {
		var information = { name: 'xiaoming', age: 20 };

		var xiaoming = _objectWithoutProperties(information, []);

		(0, _chai.expect)(xiaoming.name).to.be.equal('xiaoming');
	});
	it('test spread', function () {
		var man = { sex: 'male', age: 20 };
		var xiaoming = { name: 'xiaoming' };
		var information = _extends({ xiaoming: xiaoming }, man);
		(0, _chai.expect)(information.sex).to.be.equal('male');
	});
});