import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('string test', function() {
	it('test startsWith', function() {
		var testString = 'hey,man.';
		expect(testString.startsWith('h')).to.be.equal(true);
	});
	it('test includes', function() {
		let testString = 'hey,man';
		expect(testString.includes('hey')).to.be.equal(true);
	});
	it('test endsWith', function() {
		let testValue = 'hey,man';
		expect(testValue.endsWith('man')).to.be.equal(true);
	});
	it("test repeat", function() {
		let testValue = 'cry';
		testValue = testValue.repeat(2);
		expect(testValue).to.be.equal('crycry');
	});
	it("test padStart", function() {
		let testValue;
		testValue = 'cry'.padStart(5, 'she');
		expect(testValue).to.be.equal('shcry');
	});
	it('test padEnd', function() {
		let testValue;
		testValue = 'cry'.padEnd(5, 'she');
		expect(testValue).to.be.equal('crysh');
	});
});
describe('string template test', function() {
	it('test string template', function() {
		let testString = 'xiaoming';
		let info = `my name is ${testString}`;
		expect(info).to.be.equal('my name is xiaoming');
	});
	it('string template in html', function() {
		let testString = 'xiaoming';
		let paragraph = `<p>${testString}</p>`;
		expect(paragraph).to.be.equal('<p>xiaoming</p>');
	});
	it("invoke function in template", function() {
		function getName() {
			return 'xiaoming';
		}
		let info = `myname is ${getName()}`;
		expect(info).to.be.equal(`myname is xiaoming`);
	});
	it('tag template', function() {
		let name = 'xiaoming';
		let age = 20;
		function information(template){
			var result = '';
			var index = 0;
			while(index < template.length){
				result += template[index++];
				if(index < arguments.length){
					result += arguments[index];
				}
			}
			return result;
		}
		var info = information`I am ${name},I am now ${age}`;
		expect(info).to.be.equal('I am xiaoming,I am now 20');
	})
});