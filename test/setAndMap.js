import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('test set', function() {
	//the set object is useful to keep the properties unique
	it('set initialize',function(){
		let testSet = new Set([1,2,3,4,4]);
		let testArray = [...testSet];
		expect(testArray).to.deep.equal([1,2,3,4,]);
	});
	it('set.prototype.size',function(){
		let testSet = new Set([1,2,3,4,5]);
		expect(testSet.size).to.be.equal(5);
	});
	it('see what is equal in set',function(){
		let testSet = new Set();
		testSet.add(NaN);
		testSet.add(NaN);
		//NaN is regard as equal
		expect(testSet.size).to.be.equal(1);
		// object is not equal
		testSet.add({});
		testSet.add({});
		expect(testSet.size).to.be.equal(3);
	});
	it('Set.prototype.add',function(){
		let testSet = new Set();
		testSet.add(1);
		testSet.add(2);
		testSet.add(1);
		expect(testSet.size).to.equal(2);
	});
	it('Set.prototype.has',function(){
		let testSet = new Set([2]);
		expect(testSet.has(2)).to.equal(true);
	});
	it('Set.prototype.delete',function(){
		let testSet = new Set([1,2]);
		testSet.delete(2);
		expect(testSet.has(2)).to.equal(false);
	});
	it('Set.prototype.clear',function(){
		let testSet = new Set([1,2,3,4,5]);
		testSet.clear();
		expect(testSet.size).to.equal(0);
	});
	it('use Array.from to change set object to array',function(){
		let testSet = new Set([1,2,3,4,4]);
		expect(Array.from(testSet)).to.deep.equal([1,2,3,4]);
	});
	//there is no keys in set, only value
	it('Set.prototype.keys',function(){
		let testSet = new Set(['red','blue','green','black']);
		let keys = testSet.keys();
		expect([...keys]).to.deep.equal(['red','blue','green','black']);
	});
	it('Set.prototype.values',function(){
		let testSet = new Set(['red','blue','green']);
		let values = testSet.values();
		expect([...values]).to.deep.equal(['red','blue','green']);
	});
	it('Set.prototype.entries',function(){
		let testSet = new Set(['red','blue']);
		let entries = testSet.entries();
		expect([...entries]).to.deep.equal([['red','red'],['blue','blue']]);
	});
});
describe('test weakSet',function(){
	it('WeakSet initialize',function(){
		//only accept object when initialize
		let testWeakSet = new WeakSet([[1,2],[3,4]]);
	});
	it('WeakSet.prototype.add&&has',function(){
		let xiaoming = {};
		let testWeakSet = new WeakSet();
		testWeakSet.add(xiaoming);
		expect(testWeakSet.has(xiaoming)).to.equal(true);
	});
	it('WeakSet.prototype.delete',function(){
		let xiaoming = {};
		let testWeakSet = new WeakSet();
		testWeakSet.add(xiaoming);
		testWeakSet.delete(xiaoming);
		expect(testWeakSet.has(xiaoming)).to.equal(false);
	});
});
describe('test Map',function(){
	it('initialize',function(){
		let testMap = new Map([['xiaoming','student']]);
		expect(testMap.get('xiaoming')).to.equal('student');
	});
	it("Map.prototype.size",function(){
		let testMap = new Map([['xiaoming','student']]);
		//console.log(testMap.get('xiaoming'));
		expect(testMap.size).to.equal(1);
	});
	it('Map.prototype.set',function(){
		let testMap = new Map();
		let xiaoming = {};
		testMap.set(xiaoming,'student');
		expect(testMap.get(xiaoming)).to.equal('student');
	});
	it('Map.prototype.has',function(){
		let testMap = new Map();
		testMap.set(undefined,'undefined');
		expect(testMap.has(undefined)).to.equal(true);
	});
	it('Map.prototype.clear',function(){
		let testMap = new Map([[undefined,undefined]]);
		testMap.clear();
		expect(testMap.size).to.equal(0);
	});
	it('Map.prototype.keys',function(){
		let testMap = new Map();
		testMap.set('first','xioaming');
		testMap.set('second','xiaohong');
		let keys = testMap.keys();
		expect([...keys]).to.deep.equal(['first','second']);
	});
	it('Map.prototype.values',function(){
		let testMap = new Map();
		testMap.set('first','xiaoming');
		testMap.set('second','xiaohong');
		let values = testMap.values();
		expect([...values]).to.deep.equal(['xiaoming','xiaohong']);
	});
	it('Map.prototype.entries',function(){
		let testMap = new Map();
		testMap.set('first','xioaming');
		testMap.set('second','xiaohong');
		let entries = testMap.entries();
		expect([...entries][1]).to.deep.equal(['second','xiaohong']);
	});
});
