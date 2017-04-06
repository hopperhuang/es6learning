import {expect,assert} from 'chai';
describe('test destructuring',function(){
	it('destructuring',function(){
		let [first,second,third] = [1,2,3];
		expect(first).to.be.equal(1);
	});
	it('another destructuring',function(){
		let [first,,second] = [1,2,3];
		expect(second).to.be.equal(3);
	});
	it('test ...',function(){
		let [first,...second] = [1,2,3];
		expect(second).to.deep.equal([2,3]);
	});
	it('test destructure failure',function(){
		let [first,second] = [1];
		expect(second).to.be.equal(undefined);
	});
	it('set default',function(){
		let [first,second = 3] = [1];
		expect(second).to.be.equal(3);
	});
	it('default is an expression',function(){
		function setValue(){
			return 'a';
		}
		let [first = setValue()] = [1];
		expect(first).to.be.equal(1);
	});
	it('default and expression',function(){
		function setValue(){
			return 'a';
		}
		let [first = setValue()] = [undefined];
		expect(first).to.be.equal('a');
	});
});
describe('object destructuring',function(){
	it('first test object destructuring',function(){
		let {xiaoming,xiaohong} = {xiaoming:'xiaoming',xiaohong:'xiaohong'};
		expect(xiaohong).to.be.equal('xiaohong');
	});
	it('name is not equal property',function(){
		let {xiaohong} = {xiaoming:'xiaoming'};
		expect(xiaohong).to.be.equal(undefined);
	});
	it('when name is not equal property',function(){
		let {xiaoming:xiaohong} = {xiaoming:'xiaoming'};
		expect(xiaohong).to.be.equal('xiaoming');
	});
	it('test default',function(){
		let {age = 20} = {name:'xiaoming'};
		expect(age).to.be.equal(20);
	});
	it('set default when name is not equal property',function(){
		let {xiaoming:age = 20} = {age:30};
		expect(age).to.be.equal(20);
	});
	it('if variance is anounced',function(){
		let xiaoming;
		({xiaoming} = {xiaoming:'ming'});
		expect(xiaoming).to.be.equal('ming');
	});
});
describe('destructure string',function(){
	it('string length',function(){
		let {length:xiaoming} = 'xiaoming';
		expect(xiaoming).to.be.equal(8);
	});
	it('array and string',function(){
		let [first,second,third] = 'abc';
		expect(first).to.be.equal('a');
	});
});
describe('default arguments',function(){
	function message([name,age]){
		return 'myname:' + name +','+'myage:' + age;
	}
	var info = message(['xiaoming','23']);
	it('test param',function(){
		expect(info).to.be.equal('myname:xiaoming,myage:23');
	});
});

