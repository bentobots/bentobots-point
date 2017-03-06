'use strict';

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('transparently creates a point', function () {
  var result = (0, _create2.default)({ X: 1, Y: 2, Z: 3 });
  var expected = { POINT: { X: 1, Y: 2, Z: 3 } };
  expect(result).toEqual(expected);
});

it('creates points with single array value', function () {
  var result = (0, _create2.default)({ X: [1, 2, 3], Y: 2, Z: 3 });
  var expected = {
    POINT: [{ X: 1, Y: 2, Z: 3 }, { X: 2, Y: 2, Z: 3 }, { X: 3, Y: 2, Z: 3 }]
  };
  expect(result).toEqual(expected);
});

it('creates points with multiple array value', function () {
  var result = (0, _create2.default)({ X: [1, 2, 3], Y: [7, 8, 9], Z: 3 });
  var expected = {
    POINT: [{ X: 1, Y: 7, Z: 3 }, { X: 1, Y: 8, Z: 3 }, { X: 1, Y: 9, Z: 3 }, { X: 2, Y: 7, Z: 3 }, { X: 2, Y: 8, Z: 3 }, { X: 2, Y: 9, Z: 3 }, { X: 3, Y: 7, Z: 3 }, { X: 3, Y: 8, Z: 3 }, { X: 3, Y: 9, Z: 3 }]
  };
  expect(result).toEqual(expected);
});

// console.log(create({X: [1, 2], Y: 2, Z: 3}))
// console.log(create({X: 1, Y: 2, Z: 3}))
// console.log(create({X: [1, 2, 3], Y: 2, Z: 3}))