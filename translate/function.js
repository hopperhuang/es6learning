'use strict';

var _chai = require('chai');

require('babel-polyfill');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

describe('function test', function () {
	it('test default param', function () {
		function add() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

			return x + y;
		}
		(0, _chai.expect)(add()).to.be.equal(3);
	});
	it('test default para with object destructuring', function () {
		function add(_ref) {
			var _ref$x = _ref.x,
			    x = _ref$x === undefined ? 1 : _ref$x,
			    _ref$y = _ref.y,
			    y = _ref$y === undefined ? 2 : _ref$y;

			return x + y;
		}
		(0, _chai.expect)(add({})).to.be.equal(3);
		(0, _chai.expect)(add({ x: 4, y: 5 })).to.be.equal(9);
	});
	it('show how to default param destructuring', function () {
		//tht function will get the arguments before destructuring
		//see the difference below
		function add() {
			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref2$x = _ref2.x,
			    x = _ref2$x === undefined ? 1 : _ref2$x,
			    _ref2$y = _ref2.y,
			    y = _ref2$y === undefined ? 2 : _ref2$y;

			//the process below run like this：
			//first get arugments ,but in this case ,the aruments is null ,so it gets nothing
			//then destructuring the default,({x = 1, y = 2} = {}),
			//it means let x  = 1;let y = 2;
			return x + y;
		}
		(0, _chai.expect)(add()).to.be.equal(3); //pass
		//we can see another case,
		(0, _chai.expect)(add({ x: 2 })).to.be.equal(4); //pass
		//it runs like below :
		//get arguments {x:2};
		//destructuring: let {x = 1,y = 2} = {x:2} ==> let x = 2 ,y =2 ,so it returns 4

		//let's see thi another way set default param
		function anotherAdd() {
			var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 1, y: 2 },
			    x = _ref3.x,
			    y = _ref3.y;

			return x + y;
		}
		(0, _chai.expect)(anotherAdd()).to.be.equal(3);
		//it do like this:
		//get arguments ,in this case it gets null
		//destructuring default, let {x:y} = {x:1,y:2} === > let x = 1,y=2,so returns 3
		(0, _chai.expect)(isNaN({ x: 2 })).to.be.equal(true);

		//why is NaN, it runs like this
		//get arguments {x:2}
		//destructuring let {x,y} = {x:2,y} ====> let x = 2 ;let y ; return 2+undefined ===>NaN
	});
	it('test lenght without default param', function () {
		function add(firstValue, secondValue) {
			return firstValue + secondValue;
		}
		(0, _chai.expect)(add.length).to.be.equal(2);
	});
	it('test length with default param', function () {
		function add() {
			var firstValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
			var secondValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

			return firstValue + secondValue;
		}
		(0, _chai.expect)(add.length).to.be.equal(0);
	});
	it('test scope', function () {
		//top
		function add(x) {
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
				x = 2;
			};
			//outer
			y(); //inner
			return x;
		}
		(0, _chai.expect)(add()).to.be.equal(2);
		var x = 1;

		function anotherTest(x) {
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
				x = 2;
			};

			var x = 3;
			y();
			return x;
		}
		(0, _chai.expect)(anotherTest()).to.be.equal(2);
		//if function with param ,there is three scope ,global,param,body,but the param will initialed ,before the body declaring.
		/*
   * If the function’s formal parameters do not include any default value initializers then the body 
   * declarations are instantiated in the same Environment Record as the parameters. If default value 
   * parameter initializers exist, a second Environment Record is created for the body declarations. 
   * Formal parameters and functions are initialized as part of FunctionDeclarationInstantiation.
   * ll other bindings are initialized during evaluation of the function body.
   */
	});
	it('test rest param', function () {
		function add() {
			var sum = 0;

			for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
				values[_key] = arguments[_key];
			}

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					sum += value;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return sum;
		}
		(0, _chai.expect)(add(1, 2, 3)).to.be.equal(6);
	});
});
describe('test spread', function () {
	it('as param', function () {
		function add(firstValue, secondValue) {
			return firstValue + secondValue;
		}
		var testArray = [1, 2];
		(0, _chai.expect)(add.apply(undefined, testArray)).to.be.equal(3);
	});
	it('concat array', function () {
		var firstArray = [1, 2, 3];
		var secondArray = [4, 5, 6].concat(firstArray);
		(0, _chai.expect)(secondArray).to.deep.equal([4, 5, 6, 1, 2, 3]);
	});
	it('use in destructuring', function () {
		var first = 1,
		    second = [2, 3];

		(0, _chai.expect)(first).to.deep.equal(1);
		(0, _chai.expect)(second).to.deep.equal([2, 3]);
	});
	it('change string into array', function () {
		var hello = 'hello';
		var stringArray = [].concat(_toConsumableArray(hello));
		(0, _chai.expect)(stringArray).to.deep.equal(['h', 'e', 'l', 'l', 'o']);
	});
	it('use in object with iterator', function () {
		var arrayLike = {
			0: 'a',
			1: 'b',
			2: 'c',
			length: 3
		};
		(0, _chai.expect)([].concat(_toConsumableArray(arrayLike))).to.deep.equal(['a', 'b', 'c']);
	});
});
describe('arrow', function () {
	it('test arrow', function () {
		var _this = this;

		var xiaoming = {
			_name: 'xiaoming',
			getName: function getName() {
				return _this._name;
			}
		};
		//arrow didn't bind this
		(0, _chai.expect)(xiaoming.getName()).to.be.equal(undefined);
	});
});