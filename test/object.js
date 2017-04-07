import {expect,assert} from 'chai';
import 'babel-polyfill';
describe('object extension',function(){
	it('simple expression',function(){
		function information(name,age){
			return {name,age};
		}
		let xiaoming = information('xiaoming',20);
		expect(xiaoming).to.deep.equal({name:'xiaoming',age:20});
	});
	it('test property',function(){
		let name = "name";
		let xiaoming = {
			[name]:'xiaoming'
		};
		expect(xiaoming.name).to.be.equal('xiaoming');
		let na = 'na';
		let me = 'me';
		let xiaohong = {
			[na + me]:'xiaohong'
		};
		expect(xiaohong.name).to.be.equal('xiaohong');
	});
	it('test object method name',function(){
		let xiaoming = {
			sayName(){
				return 'I am xiaoming';
			}
		};
		expect(xiaoming.sayName.name).to.be.equal('sayName');
	});
	it('test object.is',function(){
		expect(Object.is('xiaoming','xiaoming')).to.be.equal(true);
		expect(Object.is(NaN,NaN)).to.be.equal(true);
	});
	it('test Object.assign',function(){
		let xiaoming = {name:'xiaoming'};
		let age = {age:20};
		let height = {height:170};
		Object.assign(xiaoming,age,height);
		expect(xiaoming.age).to.be.equal(20);
	});
	it('Object.assign in constructor',function(){
		class Man{
			constructor(name,age){
				Object.assign(this,{name,age});
			}
		}
		let xiaoming = new Man('xiaoming',20);
		expect(xiaoming.name).to.be.equal('xiaoming');
	});
	it('clone an object',function(){
		function clone(wantToClone){
			return Object.assign({},wantToClone);
		}
		let copy = clone({name:'xiaoming'});
		expect(copy).to.deep.equal({name:'xiaoming'});
	});
	it('when two Object have same property,the later one replace the before one',function(){
		let xiaoming = {name:'xiaoming'};
		let xiaohong = {name:'xiaohong'};
		Object.assign(xiaoming,xiaohong);
		expect(xiaoming.name).to.be.equal('xiaohong');
	});
	it('Object.keys',function(){
		let xiaoming = {'name':'xiaoming',age:20};
		let keys = Object.keys(xiaoming);
		expect(keys).to.deep.equal(['name','age']);
	});
	it('Object.values',function(){
		let xiaoming = {name:'xiaoming',age:20};
		let values = Object.values(xiaoming);
		expect(values).to.deep.equal(['xiaoming',20]);
	});
	it('Object.entries',function(){
		let xiaoming = {name:'xiaoming'};
		let entries = Object.entries(xiaoming);
		expect(entries).to.deep.equal([['name','xiaoming']]);
	});
	it('destructuring in object',function(){
		let information = {name:'xiaoming',age:20};
		let {...xiaoming} = information;
		expect(xiaoming.name).to.be.equal('xiaoming');
	});
	it('test spread',function(){
		let man = {sex:'male',age:20};
		let xiaoming = {name:'xiaoming'};
		let information = {xiaoming,...man};
		expect(information.sex).to.be.equal('male');
	});
});
