import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('decorator', function() {
	it('test decorator', function() {
		function decorator(target) {
			target.say = function() {
				return 'male';
			}
		}
		@decorator
		class Man {}
		
		expect(Man.say()).to.equal('male');
	});
	it('decorate the method',function(){
		function readOnly(target,name,descriptor){
			descriptor.writable = false;
			return descriptor
		}
		class Person {
			@readOnly 
			name(){
				return 'man';
			}
		}
		try{
			Person.prototype.name = 'woman';
		} catch(error){
			expect(error instanceof TypeError).to.equal(true);
		}
	});
});