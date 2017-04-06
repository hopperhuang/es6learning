import { expect, assert } from 'chai';

describe('let', function() {
	{
		let a = 10;
		var b = 1;
	};
	it('let 的作用域 a 取值不到 ', function() {
		try {
			expect(a).to.equal(10);
			assert.fail();
		} catch(error) {
			if(error instanceof ReferenceError) {

			} else {
				throw error
			}
		}
	});
	it('let 的作用域 b 外部可以使用', function() {
		expect(b).to.equal(1);
	});
});
describe('let 在for循环中与var 的区别', function() {
	it('difference', function() {
		var testArray = [];
		for(var index = 0; index < 5; index++) {
			testArray[index] = function() {
				return index;
			};
		}
		expect(testArray[1]()).to.be.equal(5);
	});
	it('another difference', function() {
		let testArray = [];
		for(let index = 0; index < 5; index++) {
			testArray[index] = function() {
				return index;
			};
		}
		expect(testArray[1]()).to.be.equal(1);
	});
});
describe('test tdz', function() {
	it('temporal dead zone', function() {
		testValue = 1;
		testValue += 1;
		let testValue;
		expect(testValue).to.be.equal(undefined);
	});
});
describe('test 函数在块级作用域中声明', function() {
	it('hosting', function() {
		var testValue;

		function test() {
			return 'outside';
		}
		(function() {
			if(false) {
				function test() {
					return 'inside'
				}
			}
			testValue = test();
		})();
		expect(testValue).to.be.equal('outside');
	});
});
describe('test const', function() {
	it('can const change?', function() {
		const man = {};
		man.age = 20;
		expect(man.age).to.be.equal(20);
	});
});
describe('test global',function(){
	it('let and global',function(){
		let testValue = 1;
		expect(global.testValue).to.be.equal(undefined);
	});
});
