import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('function test', function() {
	it('test default param', function() {
		function add(x = 2, y = 1) {
			return x + y;
		}
		expect(add()).to.be.equal(3);
	});
	it('test default para with object destructuring', function() {
		function add({ x = 1, y = 2 }) {
			return x + y;
		}
		expect(add({})).to.be.equal(3);
		expect(add({ x: 4, y: 5 })).to.be.equal(9);
	});
	it('show how to default param destructuring', function() {
		//tht function will get the arguments before destructuring
		//see the difference below
		function add({ x = 1, y = 2 } = {}) {
			//the process below run like this：
			//first get arugments ,but in this case ,the aruments is null ,so it gets nothing
			//then destructuring the default,({x = 1, y = 2} = {}),
			//it means let x  = 1;let y = 2;
			return x + y;
		}
		expect(add()).to.be.equal(3); //pass
		//we can see another case,
		expect(add({ x: 2 })).to.be.equal(4); //pass
		//it runs like below :
		//get arguments {x:2};
		//destructuring: let {x = 1,y = 2} = {x:2} ==> let x = 2 ,y =2 ,so it returns 4

		//let's see thi another way set default param
		function anotherAdd({ x, y } = { x: 1, y: 2 }) {
			return x + y;
		}
		expect(anotherAdd()).to.be.equal(3);
		//it do like this:
		//get arguments ,in this case it gets null
		//destructuring default, let {x:y} = {x:1,y:2} === > let x = 1,y=2,so returns 3
		expect(isNaN(({ x: 2 }))).to.be.equal(true);

		//why is NaN, it runs like this
		//get arguments {x:2}
		//destructuring let {x,y} = {x:2,y} ====> let x = 2 ;let y ; return 2+undefined ===>NaN
	});
	it('test lenght without default param', function() {
		function add(firstValue, secondValue) {
			return firstValue + secondValue;
		}
		expect(add.length).to.be.equal(2);
	});
	it('test length with default param', function() {
		function add(firstValue = 1, secondValue = 2) {
			return firstValue + secondValue;
		}
		expect(add.length).to.be.equal(0);
	});
	it('test scope', function() { //top
		function add(x, y = function() { x = 2 }) { //outer
			y(); //inner
			return x;
		}
		expect(add()).to.be.equal(2);
		var x = 1;

		function anotherTest(x, y = function() { x = 2; }) {
			var  x = 3;
			y();
			return x;
		}
		expect(anotherTest()).to.be.equal(2);
		//if function with param ,there is three scope ,global,param,body,but the param will initialed ,before the body declaring.
		/*
		 * If the function’s formal parameters do not include any default value initializers then the body 
		 * declarations are instantiated in the same Environment Record as the parameters. If default value 
		 * parameter initializers exist, a second Environment Record is created for the body declarations. 
		 * Formal parameters and functions are initialized as part of FunctionDeclarationInstantiation.
		 * ll other bindings are initialized during evaluation of the function body.
		 */
	
		
	});
	it('test rest param',function(){
		function add(...values){
			let sum = 0;
			for(let value of values){
				sum += value;
			}
			return sum;
		}
		expect(add(1,2,3)).to.be.equal(6);
	});
});
describe('test spread',function(){
	it('as param',function(){
		function add(firstValue,secondValue){
			return firstValue + secondValue;
		}
		let testArray = [1,2];
		expect(add(...testArray)).to.be.equal(3);
	});
	it('concat array',function(){
		let firstArray = [1,2,3];
		let secondArray = [4,5,6,...firstArray];
		expect(secondArray).to.deep.equal([4,5,6,1,2,3]);
	});
	it('use in destructuring',function(){
		let [first,...second] = [1,2,3];
		expect(first).to.deep.equal(1);
		expect(second).to.deep.equal([2,3]);
	});
	it('change string into array',function(){
		let hello = 'hello';
		let stringArray = [...hello];
		expect(stringArray).to.deep.equal(['h','e','l','l','o']);
	});
	it('use in object with iterator',function(){
		let arrayLike = {
			0:'a',
			1:'b',
			2:'c',
			length:3
		};
		expect([...arrayLike]).to.deep.equal(['a','b','c']);
	});
});
describe('arrow',function(){
	it('test arrow',function(){
		let xiaoming = {
			_name:'xiaoming',
			getName :() => this._name
		};
		//arrow didn't bind this
		expect(xiaoming.getName()).to.be.equal(undefined);
	});
});
