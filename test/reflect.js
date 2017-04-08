import {expect,assert} from 'chai';
import 'babel-polyfill';
describe('reflect',function(){
	it('Reflect.constructor',function(){
		function Man(name,age){
			this.name = name;
			this.age = age;
		}
		let xiaoming = Reflect.construct(Man,['xiaoming',20]);
		expect(xiaoming.name).to.equal('xiaoming');
	});
	it('Reflect.apply',function(){
		function add(firstNumber,secondNumber){
			return firstNumber + secondNumber;
		}
		let result = Reflect.apply(add,null,[1,2]);
		expect(result).to.be.equal(3);
	});
	it('Reflect.set',function(){
		let xiaoming = {};
		Reflect.set(xiaoming,'name','xiaoming');
		expect(xiaoming.name).to.equal('xiaoming')
	});

	it('Reflect.get',function(){
		let xiaoming = {name:'xiaoming'};
		expect(Reflect.get(xiaoming,'name')).to.equal('xiaoming');
	});
});
