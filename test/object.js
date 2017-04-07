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
});
