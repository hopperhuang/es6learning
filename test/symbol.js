import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('test symbol', function() {
	it('symbol', function() {
		let mySymbol = Symbol('name');
		let xiaoming = {};
		xiaoming[mySymbol] = 'xiaoming';
		expect(xiaoming[mySymbol]).to.be.equal('xiaoming');
		expect(xiaoming.mySymbol).to.be.equal(undefined);
		expect(xiaoming['mySymbol']).to.be.equal(undefined);
	});
	it('get Symbol property', function() {
		let name = Symbol('name');
		let age = Symbol('age');
		let xiaoming = {
			sex:'male',
			[name]:'xiaoming',
			[age]:20
		};
		let ownProperty = Object.getOwnPropertyNames(xiaoming);
		expect(ownProperty).to.deep.equal(['sex']);
		let symbolProperty = Object.getOwnPropertySymbols(xiaoming);
		expect(symbolProperty).to.deep.equal([name,age]);
	});
	it('test for method',function(){
		let firstSymbol = Symbol.for('xiaoming');
		let secondSymbol = Symbol.for('xiaoming');
		expect(firstSymbol).to.be.equal(secondSymbol);
	});
	it('test keyfor',function(){
		let xiaoming = Symbol.for('xiaoming');
		expect(Symbol.keyFor(xiaoming)).to.be.equal('xiaoming');
	});
	it('test Symbol.hasInstance',function(){
		class Man{
			[Symbol.hasInstance](instance){
				return instance instanceof Object;
			}
		}
		expect({} instanceof new Man).to.be.equal(true);
	});
	it('test Symbol.isConcatSpreadable',function(){
		let testArray = [1,2];
		let waitToConcat = [3,4];
		waitToConcat[Symbol.isConcatSpreadable] = false;
		let concatArray = testArray.concat(waitToConcat);
		expect(concatArray).to.deep.equal([1,2,[3,4]]);
	});
});