import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('test iterator', function() {//iterator on object
	it('object iterator', function() {
		let testObject = {
			data: [1, 2, 3],
			[Symbol.iterator]: function() {
				let current = 0;
				let self = this;
				return {//return an object contains next method
					next: function() {
						if(current < self.data.length) {
							return { value: self.data[current++], done: false };
						} else {
							return { value: undefined, done: true }
						}
					}
				};
			}
		};
		let testArray = [];
		for(let value of testObject) {
			testArray.push(value);
		}
		expect(testArray).to.deep.equal([1,2,3]);
	});
	it('constructor iterator',function(){
		function TestIterator(start,stop){ //set iterator to a constructor
			this.value = start;
			this.stop = stop;
			this[Symbol.iterator] = function(){
				return this;
			};
			let self = this;
			this.next = (function(){
				return function(){
					if(self.value <= self.stop){
						let result = {value:self.value,done:false};
						self.value++;
						return result;
					}	else {
						return {value:undefined,done:true};
					}
				}
			})();
		}
		let testObject = new TestIterator(1,3);
		let testArray = [];
		for(let value of testObject){
			testArray.push(value);
		}
		expect(testArray).to.deep.equal([1,2,3]);
	});
	it('take iterator from Array',function(){
		let testArray = [1,2,3];
		let iterator = testArray[Symbol.iterator]();
		expect(iterator.next().value).to.equal(1);
	});
});