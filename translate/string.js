'use strict';

var _templateObject = _taggedTemplateLiteral(['I am ', ',I am now ', ''], ['I am ', ',I am now ', '']);

var _chai = require('chai');

require('babel-polyfill');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe('string test', function () {
	it('test startsWith', function () {
		var testString = 'hey,man.';
		(0, _chai.expect)(testString.startsWith('h')).to.be.equal(true);
	});
	it('test includes', function () {
		var testString = 'hey,man';
		(0, _chai.expect)(testString.includes('hey')).to.be.equal(true);
	});
	it('test endsWith', function () {
		var testValue = 'hey,man';
		(0, _chai.expect)(testValue.endsWith('man')).to.be.equal(true);
	});
	it("test repeat", function () {
		var testValue = 'cry';
		testValue = testValue.repeat(2);
		(0, _chai.expect)(testValue).to.be.equal('crycry');
	});
	it("test padStart", function () {
		var testValue = void 0;
		testValue = 'cry'.padStart(5, 'she');
		(0, _chai.expect)(testValue).to.be.equal('shcry');
	});
	it('test padEnd', function () {
		var testValue = void 0;
		testValue = 'cry'.padEnd(5, 'she');
		(0, _chai.expect)(testValue).to.be.equal('crysh');
	});
});
describe('string template test', function () {
	it('test string template', function () {
		var testString = 'xiaoming';
		var info = 'my name is ' + testString;
		(0, _chai.expect)(info).to.be.equal('my name is xiaoming');
	});
	it('string template in html', function () {
		var testString = 'xiaoming';
		var paragraph = '<p>' + testString + '</p>';
		(0, _chai.expect)(paragraph).to.be.equal('<p>xiaoming</p>');
	});
	it("invoke function in template", function () {
		function getName() {
			return 'xiaoming';
		}
		var info = 'myname is ' + getName();
		(0, _chai.expect)(info).to.be.equal('myname is xiaoming');
	});
	it('tag template', function () {
		var name = 'xiaoming';
		var age = 20;
		function information(template) {
			var result = '';
			var index = 0;
			while (index < template.length) {
				result += template[index++];
				if (index < arguments.length) {
					result += arguments[index];
				}
			}
			return result;
		}
		var info = information(_templateObject, name, age);
		(0, _chai.expect)(info).to.be.equal('I am xiaoming,I am now 20');
	});
});