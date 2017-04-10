import { expect, assert } from 'chai';
import 'babel-polyfill';
import fs from 'fs';
describe('async function', function() {
	it('test async', function(done) {
		async function readTwoFiles() {
			let firstData = await new Promise(function(resolve,reject){// await and promise
				fs.readFile(__dirname + '/test.txt',function(error,buffer){
					resolve(buffer.toString());
				});
			});
			expect(firstData).to.equal('test');
			let secondData = await new Promise(function(resolve,reject){
				fs.readFile(__dirname + '/another.txt',function(error,buffer){
					resolve(buffer.toString());
				});
			});
			expect(secondData).to.equal('another');
			done();
		}
		readTwoFiles();
	});
	it('promise instance',function(){
		async function testPromise(){
			return 1;
		}
		let asyncPromise = testPromise();
		expect(asyncPromise instanceof Promise ).to.equal(true);
	});
	it('test then',function(){
		async function testPromise(){
			return 1;
		}
		return testPromise().then(function(data){
			expect(data).to.equal(1);
		});
	});
	it('test await',function(){
		async function testPromise(){
			return await function(){}
		}
		return testPromise().then(function(data){
			expect(typeof data).to.equal('function')
		});
	});
});