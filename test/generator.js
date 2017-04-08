import {expect,assert} from 'chai';
import 'babel-polyfill';
describe("test generator",function(){
	it('initialize genartor',function(){
		function* generator(){
			yield 1;
			yield 2;
			yield 3;
		}
		let testGenerator = generator();
		expect(testGenerator instanceof generator).to.equal(true);
	});
	it('iterator is implied in generator instance',function(){
		function* generator(){
			yield 1;
			yield 2;
			yield 3;
		}
		let testGenerator = generator();
		let testObject = [...testGenerator];
		expect(testObject).to.deep.equal([1,2,3]);
	});
	it('test next method',function(){
		let testArray = [];
		function* generator(){
			yield testArray.push(1);
			yield testArray.push(2);
			yield testArray.push(3);
		}
		let testGenerator = generator();
		testGenerator.next();
		expect(testArray).to.deep.equal([1]);
	});
	it('next method wiht param',function(){// the param will become the yield value before one
		let testArray = [];
		function* generator(){
			let number = yield 1;
			testArray.push(number);
		}
		let testGenerator = generator();
		testGenerator.next();
		testGenerator.next(1);
		expect(testArray).to.deep.equal([1]);
	});
	it('Generator.prototype.throw',function(){
		function* generator(){
			try{
				yield;
			}	catch(error){//catch error in the generator
				expect(error).to.equal('test error');
			}
			
		}
		let testGenerator = generator();
		testGenerator.next();
		testGenerator.throw('test error');//you can throw an error by yourself;
		// when you thorw an error,the Generator.prototype.next will be invoked at the same time
		// the process above like this; g.next() ==> g.throw() ==> (  g.next() ===> catch error in generator   )
	});
	it('Generator,prototype.return',function(){ //when the return value was invoked ,the return value will be {value:undefied,done:false}
		function* generator(){
			yield 1;
			yield 2;
			yield 3;
		}
		let testGenerator = generator();
		testGenerator.next();
		expect(testGenerator.return()).to.deep.equal({value:undefined,done:true});
	});
	it('yield* ',function(){//use yield* syntax you can call another generator function 
		function* firstGenerator(){
			yield 1;
			yield 2;
			yield 3;
			yield 4;
		}
		function* secondGenerator(){
			yield* firstGenerator();
			yield 5;
			yield 6;
		}
		let testGenerator = secondGenerator();
		expect(testGenerator.next()).to.deep.equal({value:1,done:false});
	});
});
