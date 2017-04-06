'use strict';

var _chai = require('chai');

require('babel-polyfill');

describe('Array method test', function () {
	it('test from method', function () {
		var testArrayLike = {
			0: 'xiaoming',
			1: 'xiaohong',
			2: 'xiaogang',
			length: 3
		};
		var transToArray = Array.from(testArrayLike);
		(0, _chai.expect)(Array.isArray(transToArray)).to.be.equal(true);
	});
	it('old method like from', function () {
		var testArrayLike = {
			0: 'a',
			1: 'b',
			2: 'c',
			length: 3
		};
		var transToArray = Array.prototype.slice.call(testArrayLike);
		(0, _chai.expect)(Array.isArray(transToArray)).to.be.equal(true);
	});
	it('change object with iterator', function () {
		var name = 'xiaoming';
		(0, _chai.expect)(Array.isArray(Array.from(name))).to.be.equal(true);
	});
	it('from method with second param', function () {
		var testArrayLike = {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		};
		var transToArray = Array.from(testArrayLike, function (value) {
			return value * 2;
		});
		(0, _chai.expect)(transToArray).to.deep.equal([2, 4, 6]);
	});
	it('Array.of', function () {
		var testArray = Array.of('xiaoming', 'xiaohong');
		(0, _chai.expect)(testArray).to.deep.equal(['xiaoming', 'xiaohong']);
	});
	it('Array.prototype.copyWithin', function () {
		var testArray = ['xiaoming', 'xiaohong', 'xiaoguang'];
		testArray.copyWithin(0, 2, 3);
		(0, _chai.expect)(testArray).to.deep.equal(['xiaoguang', 'xiaohong', 'xiaoguang']);
	});
	it('Array.prototype.find', function () {
		var testArray = [5, 6, 7];
		var result = testArray.find(function (value) {
			return value > 6;
		});
		(0, _chai.expect)(result).to.be.equal(7);
	});
	it('Array.prototype.findIndex', function () {
		var testArray = [20, 30, 40];
		var index = testArray.findIndex(function (value) {
			return value > 30;
		});
		(0, _chai.expect)(index).to.be.equal(2);
	});
	it('Array.prototyp.fill', function () {
		var testArray = ['a', 'b', 'c'];
		testArray.fill(7, 2, 3);
		(0, _chai.expect)(testArray).to.deep.equal(['a', 'b', 7]);
	});
	it('Array.prototype.incluedes', function () {
		var testArray = [1, 2, 3];
		(0, _chai.expect)(testArray.includes(2)).to.be.equal(true);
	});
	it('Array.prototype.some', function () {
		var testValue = [1, 2, 3];
		function includes(value) {
			return testValue.some(function (currentValue) {
				return currentValue === value;
			});
		}
		(0, _chai.expect)(includes(4)).to.be.equal(false);
	});
	it('Array.prototype.keys', function () {
		var testArray = [1, 2, 3];
		var checkArray = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = testArray.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				checkArray.push(value);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		(0, _chai.expect)(checkArray).to.deep.equal([0, 1, 2]);
	});
	it('Array.prototype.values', function () {
		var testArray = [1, 2, 3];
		var checkArray = [];
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = testArray.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var value = _step2.value;

				checkArray.push(value);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		(0, _chai.expect)(checkArray).to.deep.equal([1, 2, 3]);
	});
	it('Array.prototype.entries', function () {
		var testArray = [1, 2, 3];
		var checkArray = [];
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = testArray.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var value = _step3.value;

				checkArray.push(value);
				break;
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		(0, _chai.expect)(checkArray).to.deep.equal([[0, 1]]);
	});
});