'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chai = require('chai');

describe('test destructuring', function () {
	it('destructuring', function () {
		var first = 1,
		    second = 2,
		    third = 3;

		(0, _chai.expect)(first).to.be.equal(1);
	});
	it('another destructuring', function () {
		var _ref = [1, 2, 3],
		    first = _ref[0],
		    second = _ref[2];

		(0, _chai.expect)(second).to.be.equal(3);
	});
	it('test ...', function () {
		var first = 1,
		    second = [2, 3];

		(0, _chai.expect)(second).to.deep.equal([2, 3]);
	});
	it('test destructure failure', function () {
		var _ref2 = [1],
		    first = _ref2[0],
		    second = _ref2[1];

		(0, _chai.expect)(second).to.be.equal(undefined);
	});
	it('set default', function () {
		var _ref3 = [1],
		    first = _ref3[0],
		    _ref3$ = _ref3[1],
		    second = _ref3$ === undefined ? 3 : _ref3$;

		(0, _chai.expect)(second).to.be.equal(3);
	});
	it('default is an expression', function () {
		function setValue() {
			return 'a';
		}
		var _ = 1,
		    first = _ === undefined ? setValue() : _;

		(0, _chai.expect)(first).to.be.equal(1);
	});
	it('default and expression', function () {
		function setValue() {
			return 'a';
		}
		var _undefined = undefined,
		    first = _undefined === undefined ? setValue() : _undefined;

		(0, _chai.expect)(first).to.be.equal('a');
	});
});
describe('object destructuring', function () {
	it('first test object destructuring', function () {
		var _xiaoming$xiaohong = { xiaoming: 'xiaoming', xiaohong: 'xiaohong' },
		    xiaoming = _xiaoming$xiaohong.xiaoming,
		    xiaohong = _xiaoming$xiaohong.xiaohong;

		(0, _chai.expect)(xiaohong).to.be.equal('xiaohong');
	});
	it('name is not equal property', function () {
		var _xiaoming = { xiaoming: 'xiaoming' },
		    xiaohong = _xiaoming.xiaohong;

		(0, _chai.expect)(xiaohong).to.be.equal(undefined);
	});
	it('when name is not equal property', function () {
		var _xiaoming2 = { xiaoming: 'xiaoming' },
		    xiaohong = _xiaoming2.xiaoming;

		(0, _chai.expect)(xiaohong).to.be.equal('xiaoming');
	});
	it('test default', function () {
		var _name = { name: 'xiaoming' },
		    _name$age = _name.age,
		    age = _name$age === undefined ? 20 : _name$age;

		(0, _chai.expect)(age).to.be.equal(20);
	});
	it('set default when name is not equal property', function () {
		var _age = { age: 30 },
		    _age$xiaoming = _age.xiaoming,
		    age = _age$xiaoming === undefined ? 20 : _age$xiaoming;

		(0, _chai.expect)(age).to.be.equal(20);
	});
	it('if variance is anounced', function () {
		var xiaoming = void 0;
		var _xiaoming3 = { xiaoming: 'ming' };
		xiaoming = _xiaoming3.xiaoming;

		(0, _chai.expect)(xiaoming).to.be.equal('ming');
	});
});
describe('destructure string', function () {
	it('string length', function () {
		var _xiaoming4 = 'xiaoming',
		    xiaoming = _xiaoming4.length;

		(0, _chai.expect)(xiaoming).to.be.equal(8);
	});
	it('array and string', function () {
		var _abc = 'abc',
		    _abc2 = _slicedToArray(_abc, 3),
		    first = _abc2[0],
		    second = _abc2[1],
		    third = _abc2[2];

		(0, _chai.expect)(first).to.be.equal('a');
	});
});
describe('default arguments', function () {
	function message(_ref4) {
		var _ref5 = _slicedToArray(_ref4, 2),
		    name = _ref5[0],
		    age = _ref5[1];

		return 'myname:' + name + ',' + 'myage:' + age;
	}
	var info = message(['xiaoming', '23']);
	it('test param', function () {
		(0, _chai.expect)(info).to.be.equal('myname:xiaoming,myage:23');
	});
});