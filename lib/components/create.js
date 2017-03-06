"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// var R = require('ramda')
// var Either = require('ramda-fantasy').Either

var wrap = function wrap(val) {
  return Array.isArray(val) ? val : [val];
};
var unwrap = function unwrap(val) {
  return val.length === 1 ? val[0] : val;
};
// const flatten = arr => Array.prototype.concat(...arr)
// const a = val => Array.isArray(val) ? val : flatten([val])

var create = function create(_ref) {
  var _ref$X = _ref.X,
      X = _ref$X === undefined ? 1 : _ref$X,
      _ref$Y = _ref.Y,
      Y = _ref$Y === undefined ? 1 : _ref$Y,
      _ref$Z = _ref.Z,
      Z = _ref$Z === undefined ? 1 : _ref$Z;

  var point = [];

  wrap(X).forEach(function (_X) {
    return wrap(Y).forEach(function (_Y) {
      return wrap(Z).forEach(function (_Z) {
        return point.push({ X: _X, Y: _Y, Z: _Z });
      });
    });
  });

  return { POINT: unwrap(point) };
};

// const create = R.curry(({ X = 1, Y = 1, Z = 1 }) => {
//   if (!_.isNumber(X)) return Either.Left(new Error('Input must be numeric'))

//   return Either.Right(price + (tax * price)) // <--Wrap result in Either.Right
// })

// console.log(create({X: 3}))

exports.default = create;