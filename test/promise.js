import {expect,assert} from 'chai';
import 'babel-polyfill';
import fs from 'fs';
describe('test Promise',function(){
	it('Promise',function(){
		let testPromise = new Promise(function(resolve,reject){
			let string = 'xiaoming';
			resolve(string);
		});
		return testPromise.then(function(data){ //when test promise you should return a promise object in the test
			expect(data).to.equal('xiaoming');
		});
	});
	it('Promise.prototype.then',function(){
		let testPromise = new Promise(function(resolve,reject){
			fs.readFile(__dirname + '/test.txt',function(error,buffer){
				resolve(buffer.toString());
			});
		});
		return testPromise.then(function(data){
			expect(data).to.be.equal('test');
		});
	});
	it('Promise.prototype.catch',function(){
		let testPromise = new Promise(function(resole,reject){
			reject(new Error('an error'));
		});
		return testPromise.catch(function(error){
			expect(error.message).to.equal('an error');
		});
	});
	it('Promise.resolve',function(){
		let data = new Promise(function(resolve,reject){
			fs.readFile(__dirname + '/test.txt',function(error,buffer){
				resolve(buffer.toString());
			});
		});
		let testPromise = Promise.resolve(data);
		return testPromise.then(function(data){
			expect(data).to.equal('test');
		});
	});
	it('Promise.all',function(){
		let testdata = new Promise(function(resolve,reject){
			fs.readFile(__dirname + '/test.txt',function(error,buffer){
				resolve(buffer.toString());
			});
		});
		let anotherdata = new Promise(function(resolve,reject){
			fs.readFile(__dirname + '/another.txt',function(error,buffer){
				resolve(buffer.toString());
			});
		});
		return Promise.all([testdata,anotherdata]).then(function(data){
			expect(data[0]).to.equal('test');
			expect(data[1]).to.equal('another');
		});
	});
});
