import {expect,assert} from 'chai';
import 'babel-polyfill';

describe('number test',function(){
	it('test isFinite',function(){
		expect(Number.isFinite(1)).to.be.equal(true);
	});
	it('test iSNaN',function(){
		expect(Number.isNaN(NaN)).to.be.equal(true);
	});
	it("test parseInt",function(){
		expect(Number.parseInt(1.1)).to.be.equal(1);
	});
	it("test parseFloat",function(){
		expect(Number.parseFloat('1.1a')).to.be.equal(1.1);
	});
	it('test isInteger',function(){
		expect(Number.isInteger(10)).to.be.equal(true);
	});
	it('test isSafeInteger',function(){
		expect(Number.isSafeInteger(10)).to.be.equal(true);
	});
});
describe('test Math',function(){
	it('test trunc',function(){
		expect(Math.trunc(4.1)).to.be.equal(4);
	});
	it('test sign',function(){
		expect(Math.sign(5)).to.be.equal(+1);
	});
	it('test cbrt',function(){
		expect(Math.cbrt(8)).to.be.equal(2);
	});
});
