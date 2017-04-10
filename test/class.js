import { expect, assert } from 'chai';
import 'babel-polyfill';
describe('test class', function() {
	it('initialize', function() {
		class Man {
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
			say() {
				return this.name + ',' + this.age;
			}
		}
		let xiaoming = new Man('xiaoming', 20);
		expect(xiaoming.say()).to.equal('xiaoming,' + 20);
	});
	it('extends', function() {
		class Man {
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
		}
		class Student extends Man {
			constructor(name, age) {
				super(name, age);
				this.job = 'student';
			}
		}
		let xiaoming = new Student('xiaoming', 20);
		expect(xiaoming.job).to.equal('student');
	});
	it('test prototype', function() {
		class Man {

		}
		class Student extends Man {

		}
		expect(Student.prototype.__proto__).to.equal(Man.prototype);
		expect(Student.__proto__).to.equal(Man);
	});
	it('super', function() { //super will bind this when is called
		class Man {
			constructor(name, age) {
				this.name = name;
				this.age = age;
			}
			say() {
				return this.name + ',' + this.age;
			}

		}
		class Student extends Man {
			constructor(name, age) {
				super(name, age);
				this.job = 'student';//when u want to set a property  with super, u can just set it in constructor
			}
			say() {
				return super.say() + ',' + this.job;
			}
		}
		let xiaoming = new Student('xiaoming', 20);
		expect(xiaoming.job).to.equal('student');
	});
	it('static',function(){
		class Man {
			static speak(){
				return 'I am a man.';
			}
		}
		expect(Man.speak()).to.equal('I am a man.');
	});
	it('static method inherit',function(){
		class Man {
			static speak(){
				return 'I am a man.';
			}
		}
		class Student extends Man {}
		expect(Student.speak()).to.equal('I am a man.');
	});
	it('static property',function(){
		class Man {
			static sex = 'male';
		}
		expect(Man.sex).to.equal('male');
	});
});