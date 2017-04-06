import {expect,assert} from 'chai';
import 'babel-polyfill';
describe('Array method test',function(){
	it('test from method',function(){
		let testArrayLike = {
			0:'xiaoming',
			1:'xiaohong',
			2:'xiaogang',
			length:3
		};
		let transToArray = Array.from(testArrayLike);
		expect(Array.isArray(transToArray)).to.be.equal(true);
	});
	it('old method like from',function(){
		let testArrayLike = {
			0:'a',
			1:'b',
			2:'c',
			length:3
		};
		let transToArray = Array.prototype.slice.call(testArrayLike);
		expect(Array.isArray(transToArray)).to.be.equal(true);
	});
	it('change object with iterator',function(){
		let name ='xiaoming';
		expect(Array.isArray(Array.from(name))).to.be.equal(true);
	});
	it('from method with second param',function(){
		let testArrayLike = {
			0:1,
			1:2,
			2:3,
			length:3
		};
		let transToArray = Array.from(testArrayLike,value => value*2);
		expect(transToArray).to.deep.equal([2,4,6]);
	});
	it('Array.of',function(){
		let testArray = Array.of('xiaoming','xiaohong');
		expect(testArray).to.deep.equal(['xiaoming','xiaohong']);
	});
	it('Array.prototype.copyWithin',function(){
		let testArray = ['xiaoming','xiaohong','xiaoguang'];
		testArray.copyWithin(0,2,3);
		expect(testArray).to.deep.equal(['xiaoguang','xiaohong','xiaoguang']);
	});
	it('Array.prototype.find',function(){
		let testArray = [5,6,7];
		let result = testArray.find((value) => value > 6);
		expect(result).to.be.equal(7);
	});
	it('Array.prototype.findIndex',function(){
		let testArray = [20,30,40];
		let index = testArray.findIndex((value) => value>30);
		expect(index).to.be.equal(2);
	});
	it('Array.prototyp.fill',function(){
		let testArray = ['a','b','c'];
		testArray.fill(7,2,3);
		expect(testArray).to.deep.equal(['a','b',7]);
	});
});
