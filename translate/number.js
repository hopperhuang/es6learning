'use strict';

var _chai = require('chai');

require('babel-polyfill');

describe('number test', function () {
	it('test isFinite', function () {
		(0, _chai.expect)(Number.isFinite(1)).to.be.equal(true);
	});
	it('test iSNaN', function () {
		(0, _chai.expect)(Number.isNaN(NaN)).to.be.equal(true);
	});
	it("test parseInt", function () {
		(0, _chai.expect)(Number.parseInt(1.1)).to.be.equal(1);
	});
	it("test parseFloat", function () {
		(0, _chai.expect)(Number.parseFloat('1.1a')).to.be.equal(1.1);
	});
	it('test isInteger', function () {
		(0, _chai.expect)(Number.isInteger(10)).to.be.equal(true);
	});
	it('test isSafeInteger', function () {
		(0, _chai.expect)(Number.isSafeInteger(10)).to.be.equal(true);
	});
});
describe('test Math', function () {
	it('test trunc', function () {
		(0, _chai.expect)(Math.trunc(4.1)).to.be.equal(4);
	});
	it('test sign', function () {
		(0, _chai.expect)(Math.sign(5)).to.be.equal(+1);
	});
	it('test cbrt', function () {
		(0, _chai.expect)(Math.cbrt(8)).to.be.equal(2);
	});
});