'use strict';

var _chai = require('chai');

describe('let', function () {
	{
		var _a = 10;
		var b = 1;
	};
	it('let 的作用域 a 取值不到 ', function () {
		try {
			(0, _chai.expect)(a).to.equal(10);
			_chai.assert.fail();
		} catch (error) {
			if (error instanceof ReferenceError) {} else {
				throw error;
			}
		}
	});
	it('let 的作用域 b 外部可以使用', function () {
		(0, _chai.expect)(b).to.equal(1);
	});
});
describe('let 在for循环中与var 的区别', function () {
	it('difference', function () {
		var testArray = [];
		for (var index = 0; index < 5; index++) {
			testArray[index] = function () {
				return index;
			};
		}
		(0, _chai.expect)(testArray[1]()).to.be.equal(5);
	});
	it('another difference', function () {
		var testArray = [];

		var _loop = function _loop(index) {
			testArray[index] = function () {
				return index;
			};
		};

		for (var index = 0; index < 5; index++) {
			_loop(index);
		}
		(0, _chai.expect)(testArray[1]()).to.be.equal(1);
	});
});
describe('test tdz', function () {
	it('temporal dead zone', function () {
		testValue = 1;
		testValue += 1;
		var testValue = void 0;
		(0, _chai.expect)(testValue).to.be.equal(undefined);
	});
});
describe('test 函数在块级作用域中声明', function () {
	it('hosting', function () {
		var testValue;

		function test() {
			return 'outside';
		}
		(function () {
			if (false) {
				var _test = function _test() {
					return 'inside';
				};
			}
			testValue = test();
		})();
		(0, _chai.expect)(testValue).to.be.equal('outside');
	});
});
describe('test const', function () {
	it('can const change?', function () {
		var man = {};
		man.age = 20;
		(0, _chai.expect)(man.age).to.be.equal(20);
	});
});
describe('test global', function () {
	it('let and global', function () {
		var testValue = 1;
		(0, _chai.expect)(global.testValue).to.be.equal(undefined);
	});
});