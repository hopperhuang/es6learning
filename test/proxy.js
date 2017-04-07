import {expect,assert} from 'chai';
import 'babel-polyfill';
describe('test proxy',function(){
	//用于拦截对象本身的行为
	it('constructor',function(){
		let Man = function(){
			this.sex = 'male';
		};
		let Woman = function(){
			this.sex = 'female';
		};
		let Change = new Proxy(Man,{
			construct(target,argumentList,newTarget){
				return new Woman();
			}
		});
		let xiaoming = new Change();
		expect(xiaoming.sex).to.equal('female');
	});
	it('apply',function(){
		let add = function(firstNumber,secondNumber){
			return firstNumber + secondNumber;
		};
		let proxy = new Proxy(function(){},{
			apply(target,context,argumentList){
				return add(...argumentList);
			}
		});
		let three = proxy.apply(null,[1,2]);
		expect(three).to.equal(3);
	});
	it('get',function(){
		let Man = {sex:'',age:''};
		let proxy = new Proxy(Man,{
			get(target,property,reciever){
				//console.log(reciever);
				if(property == 'sex'){
					return 'male'
				}	else if(property == 'age'){
					return 20;
				}	else {
					return 'no include this property';
				}
			}
		});
		let age = proxy.age;
		expect(age).to.equal(20);
	});
	it('set',function(){
		let Man = {};
		let proxy = new Proxy(Man,{
			set(target,property,value,reciever){
				return target[property] = value;
			}
		});
		proxy.age = 20;
		expect(Man.age).to.equal(20);
	});
});
