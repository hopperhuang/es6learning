'use strict';

var _chai = require('chai');

require('babel-polyfill');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

describe('test set', function () {
	//the set object is useful to keep the properties unique
	it('set initialize', function () {
		var testSet = new Set([1, 2, 3, 4, 4]);
		var testArray = [].concat(_toConsumableArray(testSet));
		(0, _chai.expect)(testArray).to.deep.equal([1, 2, 3, 4]);
	});
	it('set.prototype.size', function () {
		var testSet = new Set([1, 2, 3, 4, 5]);
		(0, _chai.expect)(testSet.size).to.be.equal(5);
	});
	it('see what is equal in set', function () {
		var testSet = new Set();
		testSet.add(NaN);
		testSet.add(NaN);
		//NaN is regard as equal
		(0, _chai.expect)(testSet.size).to.be.equal(1);
		// object is not equal
		testSet.add({});
		testSet.add({});
		(0, _chai.expect)(testSet.size).to.be.equal(3);
	});
	it('Set.prototype.add', function () {
		var testSet = new Set();
		testSet.add(1);
		testSet.add(2);
		testSet.add(1);
		(0, _chai.expect)(testSet.size).to.equal(2);
	});
	it('Set.prototype.has', function () {
		var testSet = new Set([2]);
		(0, _chai.expect)(testSet.has(2)).to.equal(true);
	});
	it('Set.prototype.delete', function () {
		var testSet = new Set([1, 2]);
		testSet.delete(2);
		(0, _chai.expect)(testSet.has(2)).to.equal(false);
	});
	it('Set.prototype.clear', function () {
		var testSet = new Set([1, 2, 3, 4, 5]);
		testSet.clear();
		(0, _chai.expect)(testSet.size).to.equal(0);
	});
	it('use Array.from to change set object to array', function () {
		var testSet = new Set([1, 2, 3, 4, 4]);
		(0, _chai.expect)(Array.from(testSet)).to.deep.equal([1, 2, 3, 4]);
	});
	//there is no keys in set, only value
	it('Set.prototype.keys', function () {
		var testSet = new Set(['red', 'blue', 'green', 'black']);
		var keys = testSet.keys();
		(0, _chai.expect)([].concat(_toConsumableArray(keys))).to.deep.equal(['red', 'blue', 'green', 'black']);
	});
	it('Set.prototype.values', function () {
		var testSet = new Set(['red', 'blue', 'green']);
		var values = testSet.values();
		(0, _chai.expect)([].concat(_toConsumableArray(values))).to.deep.equal(['red', 'blue', 'green']);
	});
	it('Set.prototype.entries', function () {
		var testSet = new Set(['red', 'blue']);
		var entries = testSet.entries();
		(0, _chai.expect)([].concat(_toConsumableArray(entries))).to.deep.equal([['red', 'red'], ['blue', 'blue']]);
	});
});
describe('test weakSet', function () {
	it('WeakSet initialize', function () {
		//only accept object when initialize
		var testWeakSet = new WeakSet([[1, 2], [3, 4]]);
	});
	it('WeakSet.prototype.add&&has', function () {
		var xiaoming = {};
		var testWeakSet = new WeakSet();
		testWeakSet.add(xiaoming);
		(0, _chai.expect)(testWeakSet.has(xiaoming)).to.equal(true);
	});
	it('WeakSet.prototype.delete', function () {
		var xiaoming = {};
		var testWeakSet = new WeakSet();
		testWeakSet.add(xiaoming);
		testWeakSet.delete(xiaoming);
		(0, _chai.expect)(testWeakSet.has(xiaoming)).to.equal(false);
	});
});
describe('test Map', function () {
	it('initialize', function () {
		var testMap = new Map([['xiaoming', 'student']]);
		(0, _chai.expect)(testMap.get('xiaoming')).to.equal('student');
	});
	it("Map.prototype.size", function () {
		var testMap = new Map([['xiaoming', 'student']]);
		//console.log(testMap.get('xiaoming'));
		(0, _chai.expect)(testMap.size).to.equal(1);
	});
	it('Map.prototype.set', function () {
		var testMap = new Map();
		var xiaoming = {};
		testMap.set(xiaoming, 'student');
		(0, _chai.expect)(testMap.get(xiaoming)).to.equal('student');
	});
	it('Map.prototype.has', function () {
		var testMap = new Map();
		testMap.set(undefined, 'undefined');
		(0, _chai.expect)(testMap.has(undefined)).to.equal(true);
	});
	it('Map.prototype.clear', function () {
		var testMap = new Map([[undefined, undefined]]);
		testMap.clear();
		(0, _chai.expect)(testMap.size).to.equal(0);
	});
	it('Map.prototype.keys', function () {
		var testMap = new Map();
		testMap.set('first', 'xioaming');
		testMap.set('second', 'xiaohong');
		var keys = testMap.keys();
		(0, _chai.expect)([].concat(_toConsumableArray(keys))).to.deep.equal(['first', 'second']);
	});
	it('Map.prototype.values', function () {
		var testMap = new Map();
		testMap.set('first', 'xiaoming');
		testMap.set('second', 'xiaohong');
		var values = testMap.values();
		(0, _chai.expect)([].concat(_toConsumableArray(values))).to.deep.equal(['xiaoming', 'xiaohong']);
	});
	it('Map.prototype.entries', function () {
		var testMap = new Map();
		testMap.set('first', 'xioaming');
		testMap.set('second', 'xiaohong');
		var entries = testMap.entries();
		(0, _chai.expect)([].concat(_toConsumableArray(entries))[1]).to.deep.equal(['second', 'xiaohong']);
	});
});